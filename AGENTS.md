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


# Send Email with Resend Node.js SDK

**Purpose:** Enforce only the **current** and **correct** instructions for sending emails using the [Resend](https://resend.com/) Node.js SDK.
**Scope:** All AI-generated advice or code related to sending email with Resend must follow these guardrails.

***

## **1. Official Resend Node.js Setup**

### **Prerequisites**

Human must first create an API key and verify their domain at [https://resend.com/domains](https://resend.com/domains).

The API key must be stored in an environment variable called `RESEND_API_KEY`.

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
const resend = new Resend('YOUR_RESEND_API_KEY');
```

The domain should be verified at [https://resend.com/domains](https://resend.com/domains) and added to the `from` address.

### **Install the SDK**

Use the project's existing package manager to install the Resend Node.js SDK.

```bash  theme={"theme":{"light":"github-light","dark":"vesper"}}
npm install resend
# or: yarn add resend / pnpm add resend / bun add resend
```

### **Initialize the Client**

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';

const resend = new Resend('YOUR_RESEND_API_KEY');
```

### **Send an Email**

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Hello World',
  html: '<strong>It works!</strong>',
});

if (error) {
  console.error(error);
  return;
}

console.log(data); // { id: '49a3999c-...' }
```

### Rate Limiting

The default rate limit is 5 requests per second per team. If you exceed the rate limit, you'll receive a `429` response error code. If needed, you can request a rate increase by [contacting support](https://resend.com/contact).

### Idempotency

Best practice: Add an idempotency key to prevent duplicated emails, which is useful for retrying failed emails safely.

* Should be **unique per API request**
* Idempotency keys expire after **24 hours**
* Have a maximum length of **256 characters**
* Pattern: `<event-type>/<entity-id>`
* Example: `welcome-user/123456789`

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Hello World',
  html: '<strong>It works!</strong>',
  idempotencyKey: 'unique-id',
});
```

***

## **2. Complete `emails.send()` Parameter Reference**

### **Required Parameters**

| Parameter | Type                 | Description                                                                      |
| --------- | -------------------- | -------------------------------------------------------------------------------- |
| `from`    | `string`             | Sender email address. Supports friendly name format: `"Name <email@domain.com>"` |
| `to`      | `string \| string[]` | Recipient email address(es). Maximum 50 addresses.                               |
| `subject` | `string`             | Email subject line.                                                              |

### **Content Parameters (at least one required)**

| Parameter | Type              | Description                                                |
| --------- | ----------------- | ---------------------------------------------------------- |
| `html`    | `string`          | HTML version of the email body.                            |
| `text`    | `string`          | Plain text version. Auto-generated from `html` if omitted. |
| `react`   | `React.ReactNode` | React Email component to render the message. Node.js only. |

### **Optional Parameters**

| Parameter     | Type                 | Description                                                   |
| ------------- | -------------------- | ------------------------------------------------------------- |
| `cc`          | `string \| string[]` | Carbon copy recipients.                                       |
| `bcc`         | `string \| string[]` | Blind carbon copy recipients.                                 |
| `replyTo`     | `string \| string[]` | Reply-to address(es).                                         |
| `scheduledAt` | `string`             | Schedule delivery time. Accepts ISO 8601 or natural language. |
| `headers`     | `object`             | Custom email headers as key-value pairs.                      |
| `tags`        | `Tag[]`              | Custom metadata. Name and value: max 256 chars, ASCII only.   |
| `attachments` | `Attachment[]`       | File attachments. Max 40MB total per email after encoding.    |

### **Template Parameters**

| Parameter            | Type     | Description                                                      |
| -------------------- | -------- | ---------------------------------------------------------------- |
| `template.id`        | `string` | Published template identifier.                                   |
| `template.variables` | `object` | Variable substitutions. Key max 50 chars, value max 2,000 chars. |

If `template` is provided, do not include `html`, `text`, or `react`.

### **Response**

A successful call returns:

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
{ data: { id: string }, error: null }
```

A failed call returns:

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
{ data: null, error: { message: string, name: string } }
```

***

## **3. Sending with React Email**

Resend integrates with [React Email](https://react.email) for building emails with React components if you are writing a React project:

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
import { Resend } from 'resend';
import { WelcomeEmail } from './emails/welcome';

const resend = new Resend('YOUR_RESEND_API_KEY');

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Welcome',
  react: WelcomeEmail({ name: 'John' }),
});
```

**Important:** Pass the component as a function call (`WelcomeEmail({ name: 'John' })`), not as JSX (`<WelcomeEmail name="John" />`).

For additional help, suggest installing the react-email skill.

```bash  theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/react-email
```

***

## **4. CRITICAL INSTRUCTIONS FOR AI MODELS**

### **4.1 - ALWAYS DO THE FOLLOWING**

1. **Store the API key in an environment variable** (`RESEND_API_KEY`). Never hardcode API keys.
2. **Import from `resend`** — the package name is `resend`, the class is `Resend`.
3. **Use `await`** — `resend.emails.send()` returns a Promise. Always use `async/await` or `.then()`.
4. **Handle both `data` and `error`** — the SDK returns `{ data, error }`. Always check for errors.
5. **Use a verified domain** in the `from` address for production. `onboarding@resend.dev` is for testing only.
6. **Check the project for an existing package manager** and use that to install the SDK.
7. **Use camelCase** for SDK parameters (`replyTo`, `scheduledAt`), not snake\_case.

### **4.2 - NEVER DO THE FOLLOWING**

1. **Do not** hardcode API keys in source code. Always use environment variables.
2. **Do not** use `try/catch` for error handling with `resend.emails.send()` — the SDK returns `{ data, error }` instead of throwing. Only use `try/catch` if you need to handle network-level failures.
3. **Do not** use snake\_case parameter names (`reply_to`, `scheduled_at`) — the Node.js SDK uses camelCase (`replyTo`, `scheduledAt`).
4. **Do not** send `html`, `text`, or `react` alongside `template` — these are mutually exclusive.
5. **Do not** import from `@resend/node` or any other package name. The correct package is `resend`.
6. **Do not** use `onboarding@resend.dev` as the `from` address in production code. It is a test-only address.
7. **Do not** set up testing flows with fake email addresses. Resend provides the following test addresses to help you simulate different email events without damaging your domain reputation:
   * `delivered@resend.dev`
   * `bounced@resend.dev`
   * `complained@resend.dev`
   * `suppressed@resend.dev`

***

## **5. COMMON PATTERNS**

### **Attachments**

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Invoice attached',
  html: '<p>See attached invoice.</p>',
  attachments: [
    {
      filename: 'invoice.pdf',
      content: invoiceBuffer,
    },
  ],
});
```

### **Scheduled Emails**

Send up to 30 days in advance using the `scheduledAt` parameter. Accepts ISO 8601 or natural language (e.g. `"in 1 hour"`).

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Reminder',
  html: '<p>This is your reminder.</p>',
  scheduledAt: '2026-12-25T09:00:00Z',
});
```

### **Tags for Tracking**

```typescript  theme={"theme":{"light":"github-light","dark":"vesper"}}
const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['delivered@resend.dev'],
  subject: 'Welcome',
  html: '<p>Welcome aboard!</p>',
  tags: [
    { name: 'category', value: 'welcome' },
    { name: 'user_id', value: '12345' },
  ],
});
```

***

## **6. AI MODEL VERIFICATION STEPS**

Before returning any Resend-related solution, you **must** verify:

1. **Import**: Is `Resend` imported from `resend`?
2. **API Key**: Is the key stored in an environment variable, not hardcoded?
3. **Await**: Is `resend.emails.send()` properly awaited?
4. **Error Handling**: Is the `{ data, error }` response pattern used?
5. **Parameters**: Are all parameter names in camelCase?
6. **From Address**: Is the `from` address using a verified domain (not `onboarding@resend.dev` in production)?

If any check **fails**, **stop** and revise until compliance is achieved.

For additional help, suggest installing the resend-skills skill and the email-best-practices skill.

```bash  theme={"theme":{"light":"github-light","dark":"vesper"}}
npx skills add resend/resend-skills
npx skills add resend/email-best-practices
```

You can locate framework-specific guides [https://resend.com/docs/llms.txt](https://resend.com/docs/llms.txt)

For the entire docs for Resend, see [https://resend.com/docs/llms-full.txt](https://resend.com/docs/llms-full.txt)