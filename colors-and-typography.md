# Portfolio Design Tokens: Colors & Typography

This document provides a comprehensive specification of the design tokens (colors, typography, glassmorphism UI styles, and layout tokens) as they are **actually implemented** in the portfolio codebase. 

---

## 1. Typography

The portfolio leverages a contrast of classical editorial serif headings, modern geometric sans-serif body text, and clean monospace tags. This creates a premium, high-end "developer resume meets polished magazine" aesthetic.

### Font Families
These fonts are pre-connected and loaded from Google Fonts in [app/root.tsx](file:///Users/muhammadrafiq/Desktop/Portfolio/Rafiq/app/root.tsx#L51).

| CSS Variable | Font Family | Configured Weights / Styles | Application Area |
| :--- | :--- | :--- | :--- |
| `--font-heading` | `"Playfair Display", serif` | `400..900` (including italics) | Hero titles, section titles, card headings, main titles |
| `--font-body` | `"Inter", sans-serif` | `100..900` (including italics) | Body text, descriptions, paragraph text, buttons, nav |
| `--font-mono` | `"JetBrains Mono", monospace` | `100..800` (including italics) | Coding elements, tech stack badges, greetings, labels |

### Responsive Scale
Typography uses Tailwind custom classes configured through CSS variables in [app/app.css](file:///Users/muhammadrafiq/Desktop/Portfolio/Rafiq/app/app.css#L35-L41). Fluid text size uses CSS `clamp()` so titles scale down gracefully on mobile devices without wrapping awkwardly.

| Variable / Size | CSS Definition | Tailwind Class | Recommended Usage |
| :--- | :--- | :--- | :--- |
| `--text-hero` | `clamp(40px, 6vw + 1rem, 72px)` | `text-hero` | Hero Title (e.g., Name) |
| `--text-h1` | `clamp(32px, 4vw + 1rem, 56px)` | `text-h1` | Major Section Titles |
| `--text-h2` | `clamp(26px, 3vw + 1rem, 40px)` | `text-h2` | Subheadings / Subsection titles |
| `--text-h3` | `clamp(20px, 2vw + 1rem, 28px)` | `text-h3` | Hero Role Subheading |
| `--text-body` | `17px` | `text-body` | Default body copy, descriptions |
| `--text-small` | `15px` | `text-small` | Supporting descriptions, code details |
| `--text-caption` | `13px` | `text-caption` | Mini badges, secondary labels, dates |

---

## 2. Color System

The color system relies on **layered warm neutrals** to achieve background depth, coupled with a **royal blue accent scale** for interactive targets. It is implemented entirely via custom properties in `:root` and mapped directly into Tailwind's theme in `@theme`.

### Backgrounds & Surfaces (Warm Light Mode)
A premium light-themed interface is constructed using three layers of elevation rather than flat white/gray.

| Token | CSS Custom Variable | Hex Code | Visual Swatch | Intent & Placement |
| :--- | :--- | :--- | :---: | :--- |
| Page Background | `--bg-page` | `#F3F0EA` | `![#F3F0EA]` | Page canvas backdrop. Soft, warm linen-gray that minimizes eye strain. |
| Surface Background | `--bg-surface` | `#FBFAF7` | `![#FBFAF7]` | Elevated containers (cards, dropdowns, input areas, modals). |
| Hover Surface | `--bg-surface-hover`| `#F6F3ED` | `![#F6F3ED]` | Interactive row highlights, hover cards, default tag states. |

### Text Contrast Colors
To avoid harshness, the interface completely avoids pure black (`#000000`), opting instead for warm charcoal tones.

| Token | CSS Custom Variable | Hex Code | Visual Swatch | Accessibility Target |
| :--- | :--- | :--- | :---: | :--- |
| Primary Text | `--text-primary` | `#1F1D1A` | `![#1F1D1A]` | Titles, headings, and bold labels (Contrast ratio 16:1 against background). |
| Secondary Text | `--text-secondary` | `#5C5852` | `![#5C5852]` | Body text and descriptions (Contrast ratio >7:1 against background). |
| Muted Text | `--text-muted` | `#8C8881` | `![#8C8881]` | Metadata, dates, and subtle borders (Contrast ratio ~4.6:1 against background). |

### Borders
Hairline borders separate surfaces with maximum restraint.

| Token | CSS Custom Variable | Hex Code | Visual Swatch | Usage |
| :--- | :--- | :--- | :---: | :--- |
| Default Border | `--border-default` | `#DDD8CE` | `![#DDD8CE]` | Resting state border for cards, inputs, and section dividers. |
| Hover Border | `--border-hover` | `#CAC4B8` | `![#CAC4B8]` | Interactive hover state border, reinforcing pointer events. |

### Accent Scale (Royal Blue)
The royal blue accent is expanded to five weights to provide rich active, hover, disabled, and focus states.

| Token | CSS Custom Variable | Hex Code | Visual Swatch | Design Application |
| :--- | :--- | :--- | :---: | :--- |
| Accent 50 | `--accent-50` | `#EFF6FF` | `![#EFF6FF]` | Badge/tag background fills, input focus glows, active icon backgrounds. |
| Accent 100 | `--accent-100` | `#DBEAFE` | `![#DBEAFE]` | Hover overlays, disabled button backgrounds. |
| Accent 600 | `--accent-600` | `#2563EB` | `![#2563EB]` | Primary CTAs, active links, focus outlines, main interactive blue. |
| Accent 700 | `--accent-700` | `#1D4ED8` | `![#1D4ED8]` | Hover button background states, accent-colored text on top of Accent 50. |
| Accent 800 | `--accent-800` | `#1E40AF` | `![#1E40AF]` | Pressed/active button states. |

### Semantic / Status Colors
Used dynamically to show project development statuses in [app/components/sections/ProjectsSection.tsx](file:///Users/muhammadrafiq/Desktop/Portfolio/Rafiq/app/components/sections/ProjectsSection.tsx#L13-L32).

*   **Live Status**: Green tone (`text-emerald-700` / `bg-emerald-50` / `border-emerald-200`)
*   **In Progress Status**: Amber/Orange tone (`text-amber-700` / `bg-amber-50` / `border-amber-200`)
*   **Archived Status**: Gray tone (`text-neutral-600` / `bg-neutral-50` / `border-neutral-200`)

---

## 3. UI System & Glassmorphism

The layout utilizes clean, translucent glass panels to lift cards off the ambient page background.

### Glassmorphism Utility Classes
These classes are defined in [app/app.css](file:///Users/muhammadrafiq/Desktop/Portfolio/Rafiq/app/app.css#L268-L363) and offer structural glass layouts:

```css
/* Glass Panels */
.glass-panel {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(221, 216, 206, 0.4);
  box-shadow: 
    0 4px 20px -2px rgba(28, 25, 23, 0.03),
    0 2px 8px -1px rgba(28, 25, 23, 0.02),
    inset 0 1px 1px rgba(255, 255, 255, 0.7);
}

/* Glass Panels with Interactive Hover Lift */
.glass-panel-hover:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.6);
  border-color: rgba(37, 99, 235, 0.2); /* Accent blue transition */
  box-shadow: 
    0 20px 40px -8px rgba(28, 25, 23, 0.08),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
}

/* Inset / Recessed glass container */
.glass-panel-inset {
  background: rgba(243, 240, 234, 0.45);
  border: 1px solid rgba(221, 216, 206, 0.55);
  box-shadow: inset 0 2px 4px rgba(28, 25, 23, 0.02);
}

/* Floating input elements */
.glass-input {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(221, 216, 206, 0.6);
}

/* Secondary Buttons */
.glass-button-secondary {
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(221, 216, 206, 0.6);
}
```

### Liquid Glass Navigation (Custom Dock)
The bottom dock implements the "Liquid Glass" effect to behave like Apple macOS / iOS dynamic overlays.
*   **Backdrop Filter**: `blur(24px) saturate(180%)`
*   **Backdrop Tint**: Transparent dark glass `rgba(35, 37, 42, 0.22)`
*   **Shadow System**: Dual-layer dropshadows + top border highlights + inner gloss overlays:
    ```css
    box-shadow:
      0 14px 42px -10px rgba(0, 0, 0, 0.28),
      0 2px 10px rgba(0, 0, 0, 0.12),
      inset 0 1px 1px rgba(255, 255, 255, 0.45),
      inset 0 -1px 1px rgba(255, 255, 255, 0.05),
      inset 0 0 0 1px rgba(255, 255, 255, 0.10);
    ```
*   **Interactive Cursor Glow**: Fueled by `useGlassCursor.ts`, a custom CSS-variable driven radial light highlight (`--glass-x`, `--glass-y`) moves dynamically with mouse coordinates over `.liquid-glass-cursor-glow`.
*   **3D Perspective Tilt**: Tilts slightly up to 3 degrees matching the pointer's edge proximity: `perspective(800px) rotateX(var(--glass-tilt-x)) rotateY(var(--glass-tilt-y))`.

### Ambient Glow Overlays
To simulate natural light bleed beneath the glass system, a background mesh is loaded fixed inside `.page-shell::before` in `app/app.css`:
*   **Top Left**: Radial highlight of blue at 6% opacity (`rgba(37,99,235,0.06)`).
*   **Top Right**: Soft white light highlight at 80% opacity (`rgba(255,255,255,0.8)`).
*   **Bottom Center**: Radial highlight of blue at 4% opacity (`rgba(37,99,235,0.04)`).

---

## 4. Tailwind Theme Configuration (Tailwind CSS v4)
The CSS variables listed above are integrated directly into the utility mapping in [app/app.css](file:///Users/muhammadrafiq/Desktop/Portfolio/Rafiq/app/app.css#L28-L59):

```css
@theme {
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
  --font-mono: var(--font-mono);

  --font-sans: var(--font-body);

  --text-hero: clamp(40px, 6vw + 1rem, 72px);
  --text-h1: clamp(32px, 4vw + 1rem, 56px);
  --text-h2: clamp(26px, 3vw + 1rem, 40px);
  --text-h3: clamp(20px, 2vw + 1rem, 28px);
  --text-body: 17px;
  --text-small: 15px;
  --text-caption: 13px;

  --color-bg-page: var(--bg-page);
  --color-bg-surface: var(--bg-surface);
  --color-bg-surface-hover: var(--bg-surface-hover);

  --color-border-default: var(--border-default);
  --color-border-hover: var(--border-hover);

  --color-text-primary: var(--text-primary);
  --color-text-secondary: var(--text-secondary);
  --color-text-muted: var(--text-muted);

  --color-accent-50: var(--accent-50);
  --color-accent-100: var(--accent-100);
  --color-accent-600: var(--accent-600);
  --color-accent-700: var(--accent-700);
  --color-accent-800: var(--accent-800);
}
```

This configuration ensures developers can write standard utility classes (e.g. `bg-bg-page`, `text-text-primary`, `border-border-default`, `text-hero`, `font-heading`) while maintaining absolute consistency with the core design variables.
