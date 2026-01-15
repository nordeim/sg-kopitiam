# Phase 1: Design System & Token Architecture - Detailed Execution Plan

**Objective:** Extract design tokens from the static HTML mockup and establish a comprehensive design system using Tailwind CSS v4's CSS-first configuration. This phase also implements the "Retro-Fit Abstraction Layer" for Shadcn UI components.

**Estimated Effort:** 10-14 hours

---

## 🎨 Sub-Phase 1.1: Design Tokens & Tailwind Configuration

> **Goal:** Codify the 1970s aesthetic into a type-safe design system using CSS variables and Tailwind v4.

### Files to Create

#### 1. `frontend/src/styles/tokens.css`
*   **Purpose:** The "Single Source of Truth" for all design variables.
*   **Features:**
    *   **Colors:** All 38 colors (Sunrise Coral, Golden Hour, Espresso, etc.) defined as RGB triplets for Tailwind opacity support (e.g., `255 107 74`).
    *   **Typography:** Fluid scales for `Righteous` (Display) and `Nunito` (Body).
    *   **Spacing:** 8pt grid system variables (`--space-1` to `--space-32`).
    *   **Radii:** Soft, 70s-style rounded corners (`--radius-sm` to `--radius-full`).
    *   **Animations:** Cubic-bezier variables (`--ease-bounce`, `--ease-smooth`).
*   **Checklist:**
    *   [ ] All tokens match `static_landing_page_mockup.html`.
    *   [ ] `@layer tokens` used for cascade control.

#### 2. `frontend/src/styles/globals.css`
*   **Purpose:** Global resets and layer orchestration.
*   **Features:**
    *   Import Tailwind v4 (`@import "tailwindcss";`).
    *   CSS Layer definition: `base`, `components`, `utilities`.
    *   Base styles: `html { scroll-behavior: smooth }`, focus visible states.
    *   Print styles and reduced motion queries.
*   **Checklist:**
    *   [ ] Focus states use `--color-sunrise-coral`.
    *   [ ] Layers ordered correctly.

#### 3. `frontend/src/app/layout.tsx` (Update)
*   **Purpose:** Inject fonts and global styles.
*   **Features:**
    *   Load `Fraunces` and `DM Sans` from `next/font/google`.
    *   Apply font variables to `<body>`.
*   **Checklist:**
    *   [ ] Fonts loaded as CSS variables.
    *   [ ] No layout shift on font load.

#### 4. `frontend/src/styles/animations.css`
*   **Purpose:** Custom keyframe definitions for the specific retro animations.
*   **Features:**
    *   `@keyframes slow-rotate` (Sunburst).
    *   `@keyframes bean-bounce` (Coffee beans).
    *   `@keyframes steam-rise` (Hot cup).
    *   `@keyframes gentle-float` (Hero illustration).
*   **Checklist:**
    *   [ ] All 4 mockup animations ported exactly.

---

## 🛠️ Sub-Phase 1.2: Utility Infrastructure

> **Goal:** Create type-safe helpers for class merging and Singapore-specific formatting.

### Files to Create

#### 1. `frontend/src/lib/utils.ts`
*   **Purpose:** Common utility functions.
*   **Features:**
    *   `cn()`: Merger for Tailwind classes (using `clsx` + `tailwind-merge`).
    *   `formatPrice()`: Singapore Dollar formatting (`S$ 3.50`).
    *   `calculateGST()`: 9% GST logic returning subtotal, gst, total.
*   **Checklist:**
    *   [ ] GST calculation is accurate to 2 decimal places for display.

#### 2. `frontend/src/hooks/use-in-view.ts`
*   **Purpose:** Hook for scroll-triggered animations.
*   **Features:**
    *   Uses `IntersectionObserver`.
    *   Returns `ref` and `isInView` boolean.
*   **Checklist:**
    *   [ ] Triggers only once (optional).

---

## 📦 Sub-Phase 1.3: Retro-Fit Component Layer

> **Goal:** Create wrapper components that force the retro aesthetic onto unstyled Shadcn/Radix primitives.

### Files to Create

#### 1. `frontend/src/components/ui/retro/button.tsx`
*   **Purpose:** The primary interaction element.
*   **Features:**
    *   Variants: `primary` (Coral), `secondary` (Outline), `ghost`.
    *   Styling: `rounded-full`, `shadow-button` (solid offset), `font-display`.
    *   Interaction: `active:translate-y-1`.
*   **Checklist:**
    *   [ ] Hover/Active states match mockup.

#### 2. `frontend/src/components/ui/retro/dialog.tsx`
*   **Purpose:** Modals for Cart/Menu.
*   **Features:**
    *   Wraps `Radix Dialog`.
    *   Styling: `bg-cream`, `border-4 border-espresso`, `rounded-xl`.
    *   Overlay: `backdrop-blur-sm bg-espresso/50`.
*   **Checklist:**
    *   [ ] Focus trapped correctly.
    *   [ ] Close button styled retro.

#### 3. `frontend/src/components/ui/retro/badge.tsx`
*   **Purpose:** Status indicators (e.g., "Best Seller").
*   **Features:**
    *   Styling: `rounded-full`, `uppercase`, `tracking-wide`, `text-xs`.
    *   Variants: `outline` (dashed), `solid` (filled).
*   **Checklist:**
    *   [ ] Dashed border variant implementation.

---

## ✅ Phase 1 Validation Criteria

1.  **Visual Fidelity**: Verify colors and fonts match mockup exactly in a test page.
2.  **Type Safety**: `cn()` correctly merges classes without type errors.
3.  **Animation**: Keyframes trigger correctly when applied to test elements.
4.  **Accessibility**:
    *   Buttons have visible focus states.
    *   Contrast ratios meet WCAG AAA (checked via automated tool or manual calc).
    *   Reduced motion query disables animations.
