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

