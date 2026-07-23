/* ============================================================
   Portfolio Color Palette — extracted from reference design
   Dark cyan/teal "developer terminal" theme with amber accent
   ============================================================ */

:root {
  /* Backgrounds */
  --color-bg-primary: #0A1F1F;      /* Deep dark teal — main page background */
  --color-bg-secondary: #0D2B2B;    /* Slightly lighter teal — gradient end */
  --color-bg-card: #122E2E;         /* Project/competency card background */

  /* Text */
  --color-text-primary: #F5F5F0;    /* Off-white — headings, name, titles */
  --color-text-muted: #9CA3AF;      /* Gray — descriptions, secondary text */

  /* Accents */
  --color-accent-cyan: #5EEAD4;     /* Bright cyan-teal — labels, tags, section headers */
  --color-accent-cyan-alt: #4ECDC4; /* Slightly deeper cyan variant (hover/darker states) */
  --color-accent-amber: #E8A33D;    /* Warm amber/gold — highlights, numbered indices */
  --color-accent-amber-alt: #F0A830;/* Lighter amber variant */

  /* Borders / Dividers */
  --color-border: #2A4545;          /* Faint teal-gray — tag borders, divider lines */
}

/* ============================================================
   Example usage reference (for the AI agent's mapping):

   body / page background      -> var(--color-bg-primary)
   section background (mid)    -> var(--color-bg-secondary)
   card backgrounds             -> var(--color-bg-card)
   headings / name              -> var(--color-text-primary)
   paragraph / description text -> var(--color-text-muted)
   section labels (e.g. "FEATURED PROJECTS") -> var(--color-accent-cyan)
   tech-stack tag text           -> var(--color-accent-cyan)
   "Python · Django" highlight   -> var(--color-accent-amber)
   numbered indices (01, 02...)  -> var(--color-accent-amber)
   tag / card borders            -> var(--color-border)
   ============================================================ */