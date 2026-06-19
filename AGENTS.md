# Portfolio UI/UX Design System

## Objective

Redesign the portfolio into a modern, premium, light-themed experience for recruiters, hiring managers, clients, and technical reviewers. The design should read as professional, technically credible, and easy on the eyes during long sessions — closer to a polished SaaS product than a personal project page.

Communicate: professionalism, technical depth, trustworthiness, modern AI/ML and software engineering sensibility, strong readability, low eye strain.

---

## Design Philosophy

- Minimal but not empty
- Professional but not corporate
- Modern but not trendy
- Accessible and readable at every breakpoint
- Consistent visual hierarchy — one accent color, one job for each color
- Premium feel built from restraint: hairline borders, soft elevation, smooth motion — not heavy shadows or decoration

**Avoid:** pure white page backgrounds, pure black text, gradients, decorative noise/blur, more than one accent color, more than two font families, bouncy or flashy animation.

---

## Typography

### Font families

```css
--font-heading: "Inter Tight", sans-serif;
--font-body: "Inter", sans-serif;
--font-mono: "JetBrains Mono", monospace;
```

`--font-heading` → hero title, section titles, card headings, major CTAs
`--font-body` → paragraphs, nav, descriptions, labels, buttons
`--font-mono` → code snippets, tech stack tags, terminal-style elements

### Scale (responsive)

Use `clamp()` so the hero doesn't overflow on mobile — a fixed 72px title breaks on small screens.

```css
--text-hero:     clamp(40px, 6vw + 1rem, 72px);   /* weight 800, line-height 1.1, letter-spacing -0.02em */
--text-h1:       clamp(32px, 4vw + 1rem, 56px);    /* weight 700, line-height 1.15 */
--text-h2:       clamp(26px, 3vw + 1rem, 40px);    /* weight 700, line-height 1.2 */
--text-h3:       clamp(20px, 2vw + 1rem, 28px);    /* weight 600, line-height 1.3 */

--text-body-lg:  20px;  /* weight 400, line-height 1.6 */
--text-body:     18px;  /* weight 400, line-height 1.65 */
--text-small:    16px;  /* weight 400, line-height 1.6 */
--text-caption:  14px;  /* weight 400, line-height 1.5, use sparingly — see contrast note below */
```

Hero subtitle: 22–24px, weight 400–500, color `--text-secondary`.

### Weights

```
800 — hero title only
700 — section headings
600 — card titles, nav active state
500 — nav default, button labels
400 — body text
```

---

## Color System

### Backgrounds (3 layers, not 2 — this is what makes cards feel lifted without shadows doing all the work)

```css
--bg-page:      #FAFAF9;   /* page background — never pure white */
--bg-surface:   #FFFFFF;   /* cards, nav bar, modals */
--bg-surface-hover: #F4F4F3; /* card hover fill, table row hover */
```

### Borders

```css
--border-default: #E4E4E7;
--border-hover:    #D4D4D8;  /* slightly darker on hover/focus, not just shadow */
```

### Text

```css
--text-primary:   #18181B;  /* headings, key content, nav — not pure black */
--text-secondary: #52525B;  /* paragraphs, descriptions */
--text-muted:     #71717A;  /* dates, metadata, captions */
```

Contrast check: `#18181B` on `#FAFAF9` is ~16:1 (excellent). `#52525B` on white is ~7.5:1 (excellent for body text). `#71717A` on white is ~4.6:1 — passes WCAG AA but only just, so reserve it for 14px+ non-essential text only (timestamps, tag counts), never for anything a recruiter actually needs to read.

### Accent — full scale, not one flat hex

A single hex for an accent looks fine in a mockup and falls apart the moment you need a hover state, a tag background, or a disabled button — you end up guessing. Use a scale instead:

```css
--accent-50:  #EFF6FF;   /* tag/badge backgrounds */
--accent-100: #DBEAFE;   /* subtle hover fills */
--accent-600: #2563EB;   /* default — buttons, links, icons, active states */
--accent-700: #1D4ED8;   /* hover/active on buttons, tag text on accent-50 */
--accent-800: #1E40AF;   /* pressed state */
```

Rule: text sitting on an accent-tinted background (badges, pills) uses `--accent-700` or `--accent-800`, never `--accent-600` — at low-opacity tints, 600 doesn't carry enough contrast.

Do not introduce a second accent hue. If you want a visual distinction for "AI/ML" vs "Full-Stack" tags, vary saturation of the same accent (e.g. `--accent-50` fill for one, `--border-default` + `--text-secondary` for a neutral-tag variant) rather than adding a new color.

---

## Components

### Buttons

```css
/* Primary */
background: var(--accent-600);
color: #FFFFFF;
border-radius: 12px;
padding: 12px 24px;
transition: background 200ms ease;

&:hover   { background: var(--accent-700); }
&:active  { background: var(--accent-800); }
&:disabled{ background: var(--accent-100); color: var(--text-muted); cursor: not-allowed; }

/* Secondary */
background: transparent;
border: 1px solid var(--border-default);
color: var(--text-primary);

&:hover { border-color: var(--border-hover); background: var(--bg-surface-hover); }
```

### Cards

```css
background: var(--bg-surface);
border: 1px solid var(--border-default);
border-radius: 16px;
padding: 24px 32px;
box-shadow: 0 1px 2px rgba(0,0,0,0.04);
transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;

&:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  border-color: var(--border-hover);
}
```

### Tags / tech-stack badges

```css
font-family: var(--font-mono);
font-size: 13px;
background: var(--accent-50);
color: var(--accent-700);
padding: 4px 10px;
border-radius: 8px;
border: none;
```

Keep these flat and quiet — they label, they don't shout. If a project card has 5+ tags, cap visible tags at 4 and add a "+2 more" in `--text-muted`.

### Inputs (contact form, etc.)

```css
background: var(--bg-surface);
border: 1px solid var(--border-default);
border-radius: 10px;
padding: 10px 14px;
color: var(--text-primary);

&:focus {
  outline: none;
  border-color: var(--accent-600);
  box-shadow: 0 0 0 3px var(--accent-50);
}
```

---

## Layout

```css
--content-max-width: 65ch;       /* paragraph/reading width */
--section-padding: clamp(64px, 10vw, 120px) 0;
--card-padding: clamp(24px, 3vw, 32px);
```

Spacing scale — use these everywhere, don't eyeball gaps:

```css
--space-1: 4px;  --space-2: 8px;  --space-3: 12px; --space-4: 16px;
--space-6: 24px; --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
```

Grid: 12-column desktop, 2-column tablet, single column mobile. Gutter `--space-6` (24px) minimum.

---

## Hero Section

Visual hierarchy, top to bottom:

1. Name — `--text-hero`, `--text-primary`
2. Role — `--text-h3` weight 500, `--text-secondary`
3. One-line value proposition — `--text-body-lg`, `--text-secondary`, max-width 50ch (shorter than body content width — hero copy should never wrap awkwardly)
4. Primary CTA (e.g. "View projects") + secondary CTA (e.g. "Download résumé") side by side, 16px gap

No background imagery, no gradient mesh, no animated blobs — let typography and whitespace carry it.

---

## Accessibility

- Body text minimum 18px (already set above)
- All interactive elements need a visible focus state — use the `--accent-50` ring shown in the input spec, applied consistently to buttons, links, and nav items too
- Contrast targets: 4.5:1 minimum for text under 18px, 3:1 for 18px+ — all pairs above have been checked against this
- Click/tap targets minimum 44×44px
- Keyboard nav: tab order should follow visual order top-to-bottom, left-to-right; no keyboard traps in any modal or mobile menu

---

## Motion

```css
transition-duration: 200ms–300ms;
transition-timing-function: ease-out; /* not linear, not bounce */
```

Allowed: fade-in on scroll, slide-up on scroll (translateY 12px → 0), scale 1 → 1.02 on hover.
Avoid: bounce/elastic easing, parallax, anything that retriggers on every scroll tick, motion longer than 400ms.

---

## Implementation Notes for the Agent

- All colors above are intended as CSS custom properties on `:root` — wire them in once, reference everywhere, don't hardcode hex in components.
- The accent scale (50/100/600/700/800) replaces the single flat `#2563EB` from the original spec — same default button/link color, but now hover, active, disabled, and tag states have a defined source instead of being improvised per-component.
- Card elevation comes from layered backgrounds (`--bg-page` vs `--bg-surface`) plus a hover-only shadow — resting state should look flat and calm; the lift should only appear on interaction.
- If a dark theme is wanted later, this structure extends cleanly: invert the three background layers, flip text primary/muted, keep the same accent hue at adjusted lightness. Not needed for this pass — light theme only, per current direction.
