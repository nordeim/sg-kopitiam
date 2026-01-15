✦ I have completed the meticulous remediation plan for the frontend visual discrepancies.

  Here is a summary of the actions taken:
   1. Updated Design Tokens (`tokens.css`): Aligned the CSS variables with the authoritative static_landing_page_mockup.html, adding missing tokens like sunrise-amber, terracotta-warm, and specific shadow/radius values.
   2. Updated Global Styles (`globals.css`): Removed conflicting base styles and aligned typography defaults with the mockup.
   3. Updated Tailwind Config (`tailwind.config.ts`): Mapped the new tokens to Tailwind classes, ensuring all colors, fonts, and animations match the mockup verbatim.
   4. Updated Components:
       * SunburstBackground: Corrected opacity and animation duration.
       * HomePage: Re-implemented the hero section structure to match the mockup exactly, including stats grid and badge styling.
       * MenuPage: Applied correct background colors, card styles, and ticket border effects.
       * HeritagePage: Added wood grain texture and vintage quote styling.
       * LocationsPage: Aligned card layout and badge styling with the mockup.
       * Header: Matched the specific glassmorphism and mobile menu transition styles.
       * Footer: Implemented the specific decorative gradient border.

  I have also resolved the build errors and linting issues encountered during the process. The frontend should now be visually identical to the static mockup.

  Validation:
  I have run npm run build and npm run lint successfully, confirming that the changes are syntactically correct and type-safe.

  The remediation is complete. The frontend implementation now faithfully reflects the "Avant-Garde Kopitiam" aesthetic defined in the static mockup.

