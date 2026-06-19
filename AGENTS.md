# Liquid Glass Navbar — Implementation Guide

**Goal:** Upgrade the existing pill navbar (`Navbar.tsx`) to match Apple's real
"Liquid Glass" material — layered blur, specular edge highlights, and a
cursor-tracked light reflection with a subtle 3D tilt, the way the glass
visibly reacts to where the pointer is.

This doc is written for an automated coding agent. Follow the steps in order.
Every file path, selector, and code block below is final — copy them exactly
unless a step says "adapt to project conventions."

---

## 0. Files touched

| File | Action |
|---|---|
| `src/styles/liquid-glass.css` (or your global stylesheet) | Create/append CSS in §1 |
| `src/components/GlassDistortion.tsx` | Create (new) |
| `src/hooks/useGlassCursor.ts` | Create (new) |
| `src/components/Navbar.tsx` | Modify per §4 |
| Root layout (`app/layout.tsx` / `_app.tsx` / equivalent) | Mount `<GlassDistortion />` once |

---

## 1. CSS — base glass material + cursor glow

Append to the project's global stylesheet (wherever `.liquid-glass-nav` etc.
currently live).

```css
/* === Liquid Glass — Navbar Pill ===
   Tint is neutral dark glass (not white-frosted) so whatever colors sit
   behind the bar — sky, photo, gradient — bleed through tinted, exactly
   like the reference iOS dock screenshot. */
.liquid-glass-nav {
  position: relative;
  isolation: isolate;
  background: rgba(20, 22, 28, 0.32);
  backdrop-filter: url(#liquid-glass-distort) blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%); /* Safari ignores SVG ref gracefully */
  box-shadow:
    0 12px 40px -8px rgba(0, 0, 0, 0.35),
    0 2px 8px rgba(0, 0, 0, 0.15),
    inset 0 1px 1px rgba(255, 255, 255, 0.5),
    inset 0 -1px 1px rgba(255, 255, 255, 0.06),
    inset 0 0 0 1px rgba(255, 255, 255, 0.12);

  /* cursor-reactive custom properties, driven by useGlassCursor.ts */
  --glass-x: 50%;
  --glass-y: 50%;
  --glass-glow-opacity: 0;
  --glass-tilt-x: 0deg;
  --glass-tilt-y: 0deg;

  transform: perspective(800px) rotateX(var(--glass-tilt-x)) rotateY(var(--glass-tilt-y));
  transform-style: preserve-3d;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* Gradient ring — glass edges catch light unevenly, never a flat border */
.liquid-glass-nav::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.55) 0%,
    rgba(255, 255, 255, 0.05) 35%,
    rgba(255, 255, 255, 0) 55%,
    rgba(255, 255, 255, 0.25) 100%
  );
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}

/* Top specular streak — thin bright rim line, brightest where it curves
   over the top-left, exactly like the reference photo's highlight arc */
.liquid-glass-nav::after {
  content: "";
  position: absolute;
  top: 0;
  left: 6%;
  right: 30%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
  pointer-events: none;
  z-index: 2;
}

/* Cursor-tracked specular highlight — the moving "wet glass" glow.
   This is a real DOM element (.liquid-glass-cursor-glow), not a pseudo-element,
   because it needs to sit above ::before/::after in paint order. See §4. */
.liquid-glass-cursor-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    circle 160px at var(--glass-x) var(--glass-y),
    rgba(255, 255, 255, 0.55),
    rgba(255, 255, 255, 0.08) 45%,
    transparent 70%
  );
  opacity: var(--glass-glow-opacity);
  transition: opacity 0.3s ease;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 3;
}

/* === Active nav item — sits "inside" the glass, slightly pressed === */
.liquid-glass-active-item {
  position: relative;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow:
    inset 0 1px 2px rgba(0, 0, 0, 0.06),
    inset 0 -1px 1px rgba(255, 255, 255, 0.6),
    0 1px 2px rgba(0, 0, 0, 0.04);
}

/* === Accent CTA — "Let's Talk" === */
.liquid-glass-accent-button {
  position: relative;
  isolation: isolate;
  background: linear-gradient(135deg, rgba(10, 10, 15, 0.9), rgba(30, 30, 40, 0.85));
  backdrop-filter: blur(12px) saturate(160%);
  -webkit-backdrop-filter: blur(12px) saturate(160%);
  box-shadow:
    0 4px 14px rgba(0, 0, 0, 0.25),
    inset 0 1px 1px rgba(255, 255, 255, 0.25),
    inset 0 -1px 1px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease;
}

.liquid-glass-accent-button:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow:
    0 8px 20px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.35),
    inset 0 -1px 1px rgba(0, 0, 0, 0.3);
}

.liquid-glass-accent-button::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.15), transparent 50%);
  pointer-events: none;
}

/* Respect reduced motion: kill tilt + transition, keep static glass look */
@media (prefers-reduced-motion: reduce) {
  .liquid-glass-nav {
    transition: none;
    transform: none;
  }
  .liquid-glass-cursor-glow {
    display: none;
  }
  .liquid-glass-accent-button {
    transition: none;
  }
}
```

---

## 2. SVG refraction filter (new file)

Real Liquid Glass bends the content visible *through* it only at the rounded
**edge** — the center of the pill stays nearly undistorted, exactly like the
reference iOS dock screenshot. A turbulence/noise-based displacement map
(an earlier draft of this effect) bends the *whole* surface uniformly, which
reads as "wobbly glass," not Apple's lens-like edge refraction.

The fix: use the pill's own shape (its alpha channel) as the displacement
map. Where the alpha is flat — deep in the center, or fully outside the
shape — there's no gradient, so no displacement. Where the alpha transitions
— right at the rounded border — there's a steep gradient, so the background
bends hard exactly there. This is a single self-contained filter, no
external image assets needed.

This is a progressive enhancement — only Safari currently applies SVG
filters inside `backdrop-filter`; Chrome/Firefox silently fall back to the
plain blur already set in §1, so nothing breaks there.

```tsx
// src/components/GlassDistortion.tsx
const GlassDistortion = () => (
  <svg className="pointer-events-none absolute h-0 w-0" aria-hidden="true">
    <filter id="liquid-glass-distort" x="-20%" y="-20%" width="140%" height="140%">
      {/* Blur the shape's own alpha to create a soft ramp at the border */}
      <feGaussianBlur in="SourceAlpha" stdDeviation="14" result="blurredAlpha" />

      {/* Use that ramp as the x/y displacement map — strongest exactly
          where the alpha transitions (the rounded edge), ~zero in the
          flat interior */}
      <feDisplacementMap
        in="SourceGraphic"
        in2="blurredAlpha"
        scale="70"
        xChannelSelector="A"
        yChannelSelector="A"
        result="displaced"
      />

      {/* Clip back to the pill's exact shape so the bend never bleeds
          outside the rounded border */}
      <feComposite in="displaced" in2="SourceAlpha" operator="in" />
    </filter>
  </svg>
);

export default GlassDistortion;
```

**Mount once** near the root of the app (not per-component), e.g. in
`app/layout.tsx`:

```tsx
import GlassDistortion from "~/components/GlassDistortion";

// inside the root layout's JSX, as a sibling near the top of <body>:
<GlassDistortion />
```

**Tuning notes:**
- `stdDeviation` on the blur controls how *wide* the bend zone is (how far
  it reaches in from the edge). 14 is a good starting point for a ~44px-tall
  pill; scale up proportionally for a taller bar.
- `scale` on the displacement controls how *strong* the bend is. 70 gives a
  visible lens effect without looking broken; push toward 100+ for a more
  dramatic "thick glass" look, or down toward 30-40 for something more
  subtle.

---

## 3. Cursor-tracking hook (new file)

Tracks pointer position relative to the nav element, throttled to one update
per animation frame, and computes a soft 3D tilt. Disabled automatically for
`prefers-reduced-motion` and on touch-only devices (no hover capability).

```ts
// src/hooks/useGlassCursor.ts
import { useEffect, useRef } from "react";

export function useGlassCursor<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (prefersReducedMotion || !hasHover) return;

    let frame: number | null = null;

    const handlePointerMove = (e: PointerEvent) => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        node.style.setProperty("--glass-x", `${x}%`);
        node.style.setProperty("--glass-y", `${y}%`);

        // max ~3deg tilt, eases toward edges
        const tiltX = ((y - 50) / 50) * -3;
        const tiltY = ((x - 50) / 50) * 3;
        node.style.setProperty("--glass-tilt-x", `${tiltX}deg`);
        node.style.setProperty("--glass-tilt-y", `${tiltY}deg`);

        frame = null;
      });
    };

    const handlePointerEnter = () => {
      node.style.setProperty("--glass-glow-opacity", "1");
    };

    const handlePointerLeave = () => {
      node.style.setProperty("--glass-glow-opacity", "0");
      node.style.setProperty("--glass-tilt-x", "0deg");
      node.style.setProperty("--glass-tilt-y", "0deg");
    };

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerenter", handlePointerEnter);
    node.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerenter", handlePointerEnter);
      node.removeEventListener("pointerleave", handlePointerLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
}
```

---

## 4. Navbar.tsx changes

Two edits to the existing file:

1. Import and call `useGlassCursor`, attach its ref to the `<nav>` element.
2. Add the `.liquid-glass-cursor-glow` div as the **first child** inside
   `<nav>` (it must paint above the background but below the nav content —
   z-index in §1 CSS handles stacking, DOM order just needs it inside `<nav>`).

```tsx
import { FiBriefcase, FiBook, FiLayers, FiMessageCircle, FiUser } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { ICON_CLASS } from "~/lib/constants";
import { useGlassCursor } from "~/hooks/useGlassCursor";

const NAV_ITEMS = [
  { label: "Education", href: "#education", icon: FiBook },
  { label: "About", href: "#about", icon: FiUser },
  { label: "Experience", href: "#experience", icon: FiBriefcase },
  { label: "Projects", href: "#projects", icon: FiLayers },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeHref, setActiveHref] = useState<string>(
    NAV_ITEMS[0]?.href ?? "#about",
  );
  const lastScrollYRef = useRef(0);
  const glassRef = useGlassCursor<HTMLElement>();

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY < 24) {
        setIsVisible(true);
      } else if (scrollDelta > 8) {
        setIsVisible(false);
      } else if (scrollDelta < -8) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.href.slice(1)),
    ).filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const triggerLine = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0];

      for (const section of sections) {
        if (section.offsetTop <= triggerLine) {
          current = section;
        }
      }

      setActiveHref(`#${current.id}`);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 bottom-4 z-50 px-4 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-[140%] opacity-0"
      }`}
    >
      <nav
        ref={glassRef}
        className="relative mx-auto flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 liquid-glass-nav focus-within:ring-2 focus-within:ring-accent-100"
        aria-label="Main navigation"
      >
        <div className="liquid-glass-cursor-glow" aria-hidden="true" />

        <a
          href="#home"
          className="relative inline-flex items-center gap-2 rounded-full p-1 pr-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-600"
          aria-label="Go to home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-default/50 bg-white/60 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)]">
            <span className="text-sm font-bold tracking-wide text-text-primary font-heading">
              MR
            </span>
          </span>
          <span className="text-base font-bold tracking-tight text-text-primary font-heading">
            Rafiq
          </span>
        </a>

        <ul className="relative hidden items-center gap-2 md:flex">
          {NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 ${
                    activeHref === item.href
                      ? "liquid-glass-active-item text-accent-700 font-semibold shadow-sm"
                      : "text-text-secondary hover:bg-white/40 hover:text-text-primary"
                  }`}
                >
                  <IconComponent className={ICON_CLASS.nav} />
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="relative flex items-center gap-1 md:hidden">
          {NAV_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={`mobile-icon-${item.href}`}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  aria-current={activeHref === item.href ? "page" : undefined}
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 ${
                    activeHref === item.href
                      ? "liquid-glass-active-item text-accent-700 font-semibold shadow-sm"
                      : "text-text-secondary hover:bg-white/40 hover:text-text-primary"
                  }`}
                >
                  <IconComponent className={ICON_CLASS.nav} />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="relative hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-600 focus:ring-offset-2 md:inline-flex liquid-glass-accent-button text-white"
        >
          <FiMessageCircle className={ICON_CLASS.action} />
          Let's Talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
```

---

## 5. Why each piece exists (for the agent's own QA pass)

- **`::before` gradient ring** — glass never has a uniform border; light hits
  one edge harder than the other. Faking this with a masked gradient border
  is what separates "blurred div" from "glass."
- **`::after` top streak** — the thin bright line along the top rim is the
  single most recognizable cue in Apple's marketing renders of Liquid Glass.
- **`.liquid-glass-cursor-glow`** — a real DOM node, not a pseudo-element,
  because two pseudo-elements (`::before`, `::after`) are already spoken for
  on `.liquid-glass-nav`. Positioned via CSS custom properties so the only
  JS-driven repaint cost is two `style.setProperty` calls per frame.
- **`perspective` + `rotateX/rotateY` tilt** — small (max 3deg), eases back
  to flat on pointer leave. Keep the max tilt low; Apple's real effect is
  subtle, exaggerating it reads as a cheap CSS demo rather than glass.
- **`requestAnimationFrame` throttle in the hook** — without it, `pointermove`
  fires far faster than the browser can paint, causing jank on lower-end
  devices.
- **`(hover: hover)` + `prefers-reduced-motion` guards** — touch devices have
  no persistent cursor, so the glow/tilt would never animate meaningfully;
  skip attaching listeners entirely rather than ship dead code paths.
- **SVG `feDisplacementMap` driven by the shape's own alpha** — this is what
  produces genuine lens-like refraction concentrated at the rounded edge,
  matching the reference photo, instead of a uniform "wobbly glass" look.
  Safari-only today; everywhere else falls back cleanly to the blur-only
  look, so this is additive, never a regression.
- **Neutral dark glass tint** (`rgba(20, 22, 28, 0.32)`) instead of a white
  frosted tint — Apple's real Liquid Glass takes on whatever color sits
  behind it, tinted dark, not washed out white. This is also what makes the
  edge refraction visible at all: a heavily white-tinted glass hides the
  color-bend effect underneath it.

---

## 6. Testing checklist for the agent

- [ ] Hover the navbar on desktop: glow follows cursor, pill tilts subtly toward it.
- [ ] Move cursor off the navbar: glow fades out, tilt resets to flat.
- [ ] Resize to mobile width: icon-only nav still renders, no glow/tilt JS errors (touch has no `hover: hover`).
- [ ] Toggle OS-level "reduce motion": tilt and glow are fully disabled, base glass look remains.
- [ ] Tab through nav links with keyboard: focus rings still visible, unaffected by glass layers (z-index 2/3 don't sit above interactive elements' outlines).
- [ ] In Safari specifically: confirm the bend is concentrated at the rounded edge, not smeared across the whole pill — if it looks like uniform wobble, lower `scale` or `stdDeviation` in §2.
- [ ] Check Chrome, Firefox, Safari: all show frosted blur; Safari additionally shows refraction warping.
- [ ] Scroll page: existing show/hide-on-scroll behavior for `<header>` still works unchanged.