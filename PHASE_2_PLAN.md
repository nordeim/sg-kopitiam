# Phase 2: Frontend Architecture & Page Structure - Detailed Execution Plan

**Objective:** Recreate the page structure using Next.js 15 App Router with server components where possible, client components only for interactivity. Create all animated decorative components from the HTML mockup.

**Estimated Effort:** 12-16 hours

---

## 🏗️ Sub-Phase 2.1: Layout & Navigation Shell

> **Goal:** Build the persistent application shell (Header, Footer, Mobile Menu) with responsive behavior.

### Files to Create

#### 1. `frontend/src/components/layout/header.tsx`
*   **Purpose:** Sticky navigation bar.
*   **Features:**
    *   Glassmorphism effect (`backdrop-blur-md`).
    *   Responsive: Hamburger menu on mobile, list on desktop.
    *   Scroll state: Changes style on scroll (optional).
    *   Cart trigger: Shows item count badge.
*   **Checklist:**
    *   [ ] Logo svg implementation.
    *   [ ] Mobile toggle state management.
    *   [ ] Z-index management (`z-sticky`).

#### 2. `frontend/src/components/layout/footer.tsx`
*   **Purpose:** Site footer with retro branding.
*   **Features:**
    *   Grid layout (Links, Contact, Social, Badges).
    *   Decorative top border (repeating gradient pattern).
    *   "Est. 1973" badge integration.
*   **Checklist:**
    *   [ ] Responsive grid behavior.
    *   [ ] Social icon hover states.

#### 3. `frontend/src/components/ui/wave-divider.tsx`
*   **Purpose:** Reusable SVG section separator.
*   **Features:**
    *   Prop: `flip` (boolean) to invert vertical orientation.
    *   Prop: `color` (string) for fill color.
    *   SVG path matching the "organic" wave from mockup.
*   **Checklist:**
    *   [ ] Scales correctly to full width.
    *   [ ] No gaps between sections.

---

## 🧩 Sub-Phase 2.2: Decorative & Animation Components

> **Goal:** Port the unique "soul" elements from the HTML mockup into React components.

### Files to Create

#### 1. `frontend/src/components/decorative/sunburst-background.tsx`
*   **Purpose:** Rotating background ray effect.
*   **Features:**
    *   CSS `repeating-conic-gradient`.
    *   Animation: `slow-rotate` (120s).
    *   Absolute positioning with low opacity.
*   **Checklist:**
    *   [ ] Performance check: `will-change: transform`.

#### 2. `frontend/src/components/decorative/steam-rise.tsx`
*   **Purpose:** Animated steam for coffee cups.
*   **Features:**
    *   3 particles with staggered animation delays (`animation-delay`).
    *   SVG circles with opacity fade.
*   **Checklist:**
    *   [ ] Loops smoothly.

#### 3. `frontend/src/components/decorative/bean-bounce.tsx`
*   **Purpose:** Playful coffee bean accents.
*   **Features:**
    *   3 bean SVGs with staggered bounce animation.
    *   Used in Menu Cards.
*   **Checklist:**
    *   [ ] Staggered timing (0s, 0.2s, 0.4s).

#### 4. `frontend/src/components/decorative/coffee-ring.tsx`
*   **Purpose:** Subtle stain texture.
*   **Features:**
    *   SVG with imperfect circles.
    *   Fixed opacity (0.1).
*   **Checklist:**
    *   [ ] Placed via absolute positioning.

---

## 📄 Sub-Phase 2.3: Page Implementation (Server Components)

> **Goal:** Assemble the pages using the components built above.

### Files to Create

#### 1. `frontend/src/app/page.tsx` (Hero Section)
*   **Purpose:** The landing impression.
*   **Features:**
    *   Components: `SunburstBackground`, `HeroStats`, `FloatingCoffeeCup` (new SVG component).
    *   Content: "Where Singapore's Morning Ritual Begins".
    *   Layout: Grid with text left, illustration right.
*   **Checklist:**
    *   [ ] LCP Optimization (preload hero image/font).
    *   [ ] Responsive stacking.

#### 2. `frontend/src/app/menu/page.tsx`
*   **Purpose:** Product display.
*   **Features:**
    *   Client Component wrapper for filter state.
    *   Grid of `MenuCard` components.
    *   `BeanBounce` decoration on cards.
*   **Checklist:**
    *   [ ] Grid responsive (1 -> 2 -> 3 cols).

#### 3. `frontend/src/app/heritage/page.tsx`
*   **Purpose:** Storytelling section.
*   **Features:**
    *   `PolaroidGallery` component (images with rotation).
    *   Quote block with vintage typography.
*   **Checklist:**
    *   [ ] Typography hierarchy (Fraunces vs DM Sans).

#### 4. `frontend/src/app/locations/page.tsx`
*   **Purpose:** Store finder.
*   **Features:**
    *   `MapMarker` component with pulse animation.
    *   Location cards with badge ("Flagship").
*   **Checklist:**
    *   [ ] Sage green background matches token.

---

## ✅ Phase 2 Validation Criteria

1.  **Structure**: Verify App Router structure matches `#hero`, `#menu`, etc. sections from mockup.
2.  **Responsiveness**:
    *   Mobile menu opens/closes smoothly.
    *   Grid layouts stack correctly on mobile (<768px).
3.  **Visual Fidelity**:
    *   Sunburst rotates.
    *   Steam rises.
    *   Waves connect sections seamlessly.
4.  **Performance**:
    *   No layout shifts (CLS < 0.1) on hydration.
    *   Decorations use CSS animations (main thread free).
