# Agent & Developer Guidelines (AGENTS.md)

This file contains the core guidelines, technical constraints, design patterns, and codebase rules for any developer or AI coding agent working in this repository. Follow these specifications exactly to maintain codebase integrity and design consistency.

---

## 1. Project Technology Stack & Architecture

- **React 19 & React Router v7 (SPA Mode)**: The project is built using React 19 and React Router v7 configured in Single Page Application (SPA) mode (`ssr: false` in `react-router.config.ts`).
- **Vite Build System**: Code compilation and bundling are managed by Vite.
- **TypeScript**: Strictly typed development. Run verification checks prior to committing changes.
- **Client-Side Runtime**: No backend server runs at runtime (with the exception of static file serving). Any API logic, such as the Gemini Chatbot or Formspree contact submission, must run client-side.

### Build-Time Environment Variables Warning
> [!IMPORTANT]
> Because the application is a static SPA, runtime environment variables are not available in the browser. 
> Any variable starting with `VITE_` (e.g., `VITE_GEMINI_API_KEY`, `VITE_GEMINI_MODEL`) is baked into the JavaScript bundle **at build-time**. 
> - If you add a new API key or setting, it must be provided during build (e.g., passed as a `--build-arg` in Docker or set in the CI/CD pipeline).

---

## 2. Directory Layout & Organization

Always place new code in its respective directory within `app/`:

```
app/
├── components/
│   ├── feedback/   # Loading states, error indicators, fallbacks (ErrorBoundary views)
│   ├── layout/     # Scaffolding containers (Section wrappers, Navbar)
│   ├── sections/   # Major page content sections (Hero, About, Projects, Experience, Contact)
│   └── ui/         # Small reusable UI primitives (Buttons, Cards, Modals, AppleIcons, Chatbot)
├── data/           # Centralized static data layers serving as our client-side database
├── hooks/          # Custom hooks (e.g., cursor tracking, scroll physics)
├── lib/            # Utilities, helper scripts, constant structures, AI model configurations
├── routes/         # Router pages (+types override files)
└── app.css         # Core global styles & Tailwind theme mappings
```

---

## 3. Styling & Design System Tokens

### Style Variables Authority
> [!WARNING]
> Do NOT use the beige "Warm Light Mode" variables described in `colors-and-typography.md` (e.g., `#F3F0EA` as background). 
> The live application is styled strictly in **Dark Mode** (`color-scheme: dark`) using the variables defined in [app/app.css](file:///Users/muhammadrafiq/Desktop/Personal%20Portfolio/app/app.css).

### Color & Token Swatches (Dark Mode SSOT)
Use the CSS custom variables mapped to Tailwind CSS v4 in `app/app.css`:

* **Backgrounds & Canvas**:
  - Page Canvas: `var(--bg-page)` / `#0B0C10` (mapped to Tailwind `bg-bg-page`)
  - Surface Containers: `var(--bg-surface)` / `#14161C` (mapped to Tailwind `bg-bg-surface`)
  - Hover Surfaces: `var(--bg-surface-hover)` / `#1D1F27` (mapped to Tailwind `bg-bg-surface-hover`)
* **Typography Contrast Tiers**:
  - Primary Text: `var(--text-primary)` / `#F3F4F6` (mapped to Tailwind `text-text-primary`)
  - Secondary Text: `var(--text-secondary)` / `#9CA3AF` (mapped to Tailwind `text-text-secondary`)
  - Muted Labels & Details: `var(--text-muted)` / `#6B7280` (mapped to Tailwind `text-text-muted`)
* **Action Blue Accent**:
  - `var(--accent-600)` / `#3B82F6` (mapped to Tailwind `bg-accent-600` or `text-accent-600`)
  - Interactive Hover Blue: `var(--accent-700)` / `#60A5FA`
  - Pressed Blue: `var(--accent-800)` / `#93C5FD`

### Glassmorphism Utility Classes
To maintain consistent glass layouts, leverage the standard utility classes defined in `app/app.css`. Do not re-create glass styles from scratch:
- **`.glass-panel`**: Semitransparent background, backdrop filter blur (`16px`), fine white border overlay.
- **`.glass-panel-hover`**: Adds a transition with subtle hover translation (`translateY(-2px)`) and glows the border blue.
- **`.glass-panel-inset`**: Used for recessed input sections and code containers.
- **`.glass-input`**: Standard styled form text areas and text boxes.
- **`.glass-button-secondary`**: Semi-translucent border action targets.

### Fonts
- **Serif Heading**: `"Playfair Display", serif` (Tailwind class `font-heading`)
- **Sans-serif Body**: `"Inter", sans-serif` (Tailwind class `font-sans` or `font-body`)
- **Monospace Text**: `"JetBrains Mono", monospace` (Tailwind class `font-mono`)

---

## 4. Coding & Component Development Rules

- **No Direct DOM Mutations**: Avoid bypassing React's virtual DOM. Do not use direct query selectors (`document.getElementById`, `document.createElement`, `container.querySelectorAll`) inside React lifecycle components to inject HTML or modify DOM hierarchies unless absolutely necessary (e.g. scroll tracking hook).
- **Tag Capping Rule**:
  > [!IMPORTANT]
  > When displaying tags or technology badges (e.g., project card lists, experience listings), always enforce a tag capping mechanism.
  > - Limit the visible tags to a maximum of **4**.
  > - Truncate the rest and represent them as `+X more` (e.g., `+2 more`). This ensures visual stability across grids and prevents layout shifts.
- **Iconography Standard**:
  - Always use SF Symbol-inspired SVGs exported from [app/components/ui/AppleIcons.tsx](file:///Users/muhammadrafiq/Desktop/Personal%20Portfolio/app/components/ui/AppleIcons.tsx).
  - All icons must accept `AppleIconProps` (`React.SVGProps<SVGSVGElement>`) and utilize `strokeWidth="1.9"` and `stroke="currentColor"`.

---

## 5. Mock Database & Data Flow Rules

- **Client Data Separation**: Never hardcode arrays of data (projects, experiences, credentials, socials) directly inside UI components. Always store them inside [app/data/](file:///Users/muhammadrafiq/Desktop/Personal%20Portfolio/app/data) and import them into components dynamically.
- **Gemini Chatbot Prompts**:
  - The AI assistant logic resides in [app/lib/useGeminiChat.ts](file:///Users/muhammadrafiq/Desktop/Personal%20Portfolio/app/lib/useGeminiChat.ts) and [app/data/chatbotContext.ts](file:///Users/muhammadrafiq/Desktop/Personal%20Portfolio/app/data/chatbotContext.ts).
  - The chatbot uses keyword relevance scoring to parse context-rich blog articles matching the user query to inject them directly into the instruction set sent to Gemini. Maintain this template format to keep answers accurate.

---

## 6. Local Verification Protocols

Before submitting or requesting reviews on code changes, you **must** perform the following local validations:

1. **Type Verification**: Run `npm run typecheck` to confirm there are no compiler or React Router auto-generated types error matches.
2. **Build Compilation**: Run `npm run build` to confirm the static SPA bundle compiles correctly.
3. **Local Dev Test**: Launch the project using `npm run dev` to verify user interfaces function cleanly.
