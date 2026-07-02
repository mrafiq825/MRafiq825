# Agent & Developer Guidelines (AGENTS.md)

This file contains the core guidelines, technical constraints, design patterns, and codebase rules for any developer or AI coding agent working in this repository. Follow these specifications exactly to maintain codebase integrity and design consistency.

---

## 1. Project Technology Stack & Architecture

- **Next.js 16 & React 19 (App Router)**: The project is built using Next.js 16 and React 19 with App Router configuration.
- **Client/Server Split**: Frontend components execute client-side. Sensitive API endpoints (such as the Gemini Chatbot) run server-side via Next.js Route Handlers (`app/api/chat/route.ts`) to avoid exposing keys to the browser.
- **TypeScript**: Strictly typed development. Run verification checks prior to committing changes.

### Build-Time vs. Runtime Environment Variables
> [!IMPORTANT]
> - Client-exposed environment variables must start with the `NEXT_PUBLIC_` prefix (e.g. `NEXT_PUBLIC_VAR`).
> - Server-only environment variables (like `GEMINI_API_KEY`) do not use `NEXT_PUBLIC_` and are accessed strictly in server files (e.g., in Next.js Route Handlers) via `process.env`.
> - Do not expose raw API keys or credentials in client-side code bundles.

---

## 2. Directory Layout & Organization

Place new files in their respective folders. The project structure separates root UI components from routing pages:

```
components/          # Root-level layout and UI components
├── feedback/        # Loading states, error indicators, fallbacks
├── layout/          # Scaffolding containers (Section wrappers, Navbar)
├── sections/        # Major homepage content sections (Hero, About, Projects, Experience, Contact)
└── ui/              # Small reusable UI primitives (Buttons, Cards, Modals, AppleIcons, Chatbot)

app/                 # Next.js App Router root
├── api/             # Next.js Route Handlers (Server API endpoints like /api/chat)
├── blog/            # Blog pages and static dynamic routes
├── prompts/         # Prompts layout and client components
├── data/            # Centralized static data layers serving as our client-side database
├── hooks/           # Custom hooks (e.g. cursor tracking, scroll physics)
├── lib/             # Utilities, helper scripts, constant structures
├── types/           # TypeScript interfaces and definitions
├── globals.css      # Core global styles & Tailwind theme mappings
├── layout.tsx       # Root layout configuration
├── page.tsx         # Homepage entry point
└── not-found.tsx    # 404 fallback page layout
```

### Import Aliasing Conventions
- Use the `@/components/*` alias to import layout elements from the root `components/` directory (e.g., `@/components/ui/Button`).
- Use the `~/` alias to import directories under `app/` (e.g., `~/data/projects`, `~/lib/utils`, `~/hooks/useGlassCursor`).

---

## 3. Styling & Design System Tokens

### Style Variables Authority
> [!WARNING]
> Do NOT use the beige "Warm Light Mode" variables described in `colors-and-typography.md` (e.g., `#F3F0EA` as background). 
> The live application is styled strictly in **Dark Mode** (`color-scheme: dark`) using the variables defined in [app/globals.css](file:///Users/muhammadrafiq/Desktop/Self%20Projects/Personal%20Portfolio/app/globals.css).

### Color & Token Swatches (Dark Mode SSOT)
Use the CSS custom variables mapped to Tailwind CSS v4 in `app/globals.css`:

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
To maintain consistent glass layouts, leverage the standard utility classes defined in `app/globals.css`. Do not re-create glass styles from scratch:
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
  - Always use SF Symbol-inspired SVGs exported from [components/ui/AppleIcons.tsx](file:///Users/muhammadrafiq/Desktop/Self%20Projects/Personal%20Portfolio/components/ui/AppleIcons.tsx).
  - All icons must accept `AppleIconProps` (`React.SVGProps<SVGSVGElement>`) and utilize `strokeWidth="1.9"` and `stroke="currentColor"`.

---

## 5. Mock Database & Data Flow Rules

- **Client Data Separation**: Never hardcode arrays of data (projects, experiences, credentials, socials) directly inside UI components. Always store them inside [app/data/](file:///Users/muhammadrafiq/Desktop/Self%20Projects/Personal%20Portfolio/app/data) and import them into components dynamically.
- **Gemini Chatbot Prompts**:
  - The AI assistant logic resides on the server in [app/api/chat/route.ts](file:///Users/muhammadrafiq/Desktop/Self%20Projects/Personal%20Portfolio/app/api/chat/route.ts) which uses [app/data/chatbotContext.ts](file:///Users/muhammadrafiq/Desktop/Self%20Projects/Personal%20Portfolio/app/data/chatbotContext.ts).
  - The chatbot uses keyword relevance scoring to parse context-rich blog articles matching the user query to inject them directly into the instruction set sent to Gemini. Maintain this template format to keep answers accurate.

---

## 6. Local Verification Protocols

Before submitting or requesting reviews on code changes, you **must** perform the following local validations:

1. **Type Verification**: Run `npx tsc --noEmit` to confirm there are no TypeScript compiler errors.
2. **Build Compilation**: Run `npm run build` to confirm the Next.js production build compiles correctly.
3. **Local Dev Test**: Launch the project using `npm run dev` to verify user interfaces function cleanly.