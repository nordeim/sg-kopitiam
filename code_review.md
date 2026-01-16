✦ Analysis complete. I have fully absorbed the context, architectural constraints, and the "Anti-Generic" design philosophy of the Morning Brew Collective.

  Here is my synthesis of the project's WHAT, WHY, and HOW, verifying my alignment with the Meticulous Approach.

  1. The WHAT (Identity & Aesthetic)
   * Core Identity: A Singapore-First Headless Commerce Platform acting as a digital resurrection of 1970s Kopitiam culture.
   * Visual Language: "Avant-Garde Kopitiam." A rejection of generic "AI slop" and standard Bootstrap/Material grids. We utilize sunburst gradients, tactile UI elements, and distinct typography (Fraunces & DM Sans).
   * UX Philosophy: Intentional Minimalism. Whitespace is structural, not empty. Animations (slow-rotate, steam-rise, bean-bounce) are purposeful narrative elements, not decoration.

  2. The WHY (Mission & Compliance)
   * Cultural Resurrection: To modernize heritage without sanitizing it.
   * Regulatory Rigor: The system is built for the strict Singaporean enterprise environment:
       * GST: Fixed at 9%.
       * Financial Precision: DECIMAL(10,4) in PostgreSQL is non-negotiable to satisfy IRAS audits.
       * Payments: Native PayNow support via Stripe.
       * Invoicing: InvoiceNow (PEPPOL) UBL 2.1 compliance.
       * Data Privacy (PDPA): Strict pseudonymization (SHA256 + Salt) and consent versioning.

  3. The HOW (Architecture & Execution)
   * Architecture: Backend-for-Frontend (BFF). Next.js handles the emotional connection; Laravel handles the transactional truth.
   * Frontend (`/frontend`):
       * Stack: Next.js 15 (App Router), React 19, Tailwind CSS v4.
       * State: Zustand (with Undo/Redo history).
       * Component Strategy: The "Retro-Fit" Pledge. We never use raw Shadcn/Radix primitives. They are wrapped in src/components/ui/retro/ to enforce the aesthetic (e.g., --radius-full, --shadow-button).
   * Backend (`/backend`):
       * Stack: Laravel 12, PHP 8.3.
       * Inventory: Two-Phase Locking (Redis soft reserve + PostgreSQL lockForUpdate()) to prevent overselling.
       * Persistence: PostgreSQL 16 (Relational Data), Redis 7 (Cache/Queue).
   * Infrastructure: Docker Compose orchestration with Nginx reverse proxy and Mailpit.

  4. Operational Mandates
   1. Library Discipline: Use existing libraries (Radix, Zustand) but style them bespoke. No redundant rebuilds.
   2. Codebase Stability: The project has completed Phases 0-8. Future changes must respect the established patterns (e.g., Service repository patterns, Action classes).
   3. Testing: Changes are verified via make test (Pest + Vitest) and strictly typed.

---

Here is the code review for the recent frontend implementation of the "Visual Opus" (Landing Page) and Design System updates.

Reviewer: Senior Software Engineer
Date: January 16, 2026
Scope: frontend/src/app/page.tsx, frontend/src/styles/globals.css, frontend/src/app/layout.tsx

---

Summary
The changes successfully implement the "Avant-Garde Kopitiam" aesthetic using Tailwind CSS v4's new engine. The landing page is visually rich, semantically structured, and adheres to the "Retro-Fit" component strategy. The move to a
CSS-first configuration in globals.css is a strong modern choice.

However, there are minor accessibility concerns regarding the "Spice Level" indicators and some potential configuration redundancy between Tailwind v4 CSS variables and the TypeScript config.

---

🟡 Warning (Should Fix)

1. Accessibility: Spice Level Ratings
File: frontend/src/app/page.tsx
Issue: The spice level stars are visual-only. Screen readers will announce "Star Star Star" regardless of the actual rating (opacity is ignored by SRs).
Current Code:

 1 <div className="flex text-terracotta-warm text-xs gap-0.5">
 2   {[...Array(3)].map((_, i) => (
 3     <span key={i} className={i < product.spice ? "opacity-100" : "opacity-30"}>★</span>
 4   ))}
 5 </div>
Fix: Wrap in a container with an ARIA label and hide the individual stars.

 1 <div
 2   className="flex text-terracotta-warm text-xs gap-0.5"
 3   aria-label={`Spice level: ${product.spice} out of 3`}
 4 >
 5   {[...Array(3)].map((_, i) => (
 6     <span key={i} aria-hidden="true" className={i < product.spice ? "opacity-100" : "opacity-30"}>★</span>
 7   ))}
 8 </div>

---

🔵 Suggestion (Consider)

2. Configuration Redundancy (Tailwind v4)
File: frontend/src/styles/globals.css vs frontend/tailwind.config.ts
Observation: You are defining tokens in the new v4 @theme block in CSS:

 1 @theme {
 2   --color-sunrise-amber: #E8A857;
 3   /* ... */
 4 }
But tailwind.config.ts (checked previously) also maps these:
 1 colors: {
 2   'sunrise-amber': 'var(--sunrise-amber)',
 3 }
Why it matters: In Tailwind v4, defining --color-sunrise-amber inside @theme automatically generates the text-sunrise-amber, bg-sunrise-amber, etc. utilities. The TypeScript configuration is likely redundant and could cause confusion
if values diverge.
Action: Verify if tailwind.config.ts can be simplified or removed in favor of the pure CSS configuration, ensuring a "Single Source of Truth" for design tokens.

3. Hardcoded Content Data
File: frontend/src/app/page.tsx
Observation: FEATURED_PRODUCTS and LOCATIONS are defined as constants within the file.
Why it matters: While acceptable for a prototype/landing page, this data should eventually move to the Backend API (/api/products, /api/locations) or a separate data file (src/data/mock-data.ts) to keep the component clean.

4. Image Optimization
File: frontend/src/app/page.tsx
Observation: The "Polaroid" gallery and Location cards rely on CSS colors/emoji text placeholders.
Why it matters: When replacing these with real photos, ensure you use next/image to prevent Layout Shift (CLS) and optimize loading, as these will be "Largest Contentful Paint" (LCP) candidates.

---

✅ Positive Observations

 1. Tailwind v4 Adoption: Strong use of the new @theme directive in globals.css. This keeps the design system portable and CSS-native.
 2. Semantic Structure: Good use of <article>, <section>, and <h1>/<h2> hierarchy in page.tsx.
 3. Component Strategy: Excellent adherence to the "Retro-Fit" pledge. RetroButton and RetroBadge are used consistently instead of raw HTML elements.
 4. Performance: Heavy use of CSS animations (animate-in, fade-in, slow-rotate) instead of JS-driven motion libraries for these decorative elements. This is optimal for main-thread performance.

---

Next Steps
 1. Apply the ARIA fix for the Spice Level stars.
 2. (Optional) Refactor the tailind.config.ts to rely fully on globals.css.
 3. Proceed with integrating the "Menu" page interactions using the Zustand store.

