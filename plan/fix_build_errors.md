# Bug Fix Plan - Comprehensive Frontend Lint & Type Errors

**Objective:** Fix all linting and TypeScript errors to ensure a clean production build and maintain high code quality.

---

## 🛠️ Tasks

### 1. General Housekeeping (Unused Imports/Variables)
*   [ ] `frontend/src/app/locations/page.tsx`: Remove `RetroBadge`, `WaveDivider`.
*   [ ] `frontend/src/components/cart/cart-sheet.tsx`: Remove `Link`.
*   [ ] `frontend/src/components/checkout/steps/customer-details.tsx`: Remove `useState`, `cn`.
*   [ ] `frontend/src/components/decorative/map-marker.tsx`: Remove `Coffee`.

### 2. Missing Imports & Undefined Components
*   [ ] `frontend/src/app/menu/page.tsx`: Import `Link` from `next/link`.
*   [ ] `frontend/src/components/cart/cart-sheet.tsx`: Import/fix `RetroSheetClose`.

### 3. Escaping Entities (React Accessibility)
*   [ ] `frontend/src/app/heritage/page.tsx`: Escape `'` and `"` using `&apos;` and `&quot;`.
*   [ ] `frontend/src/app/order-confirmation/page.tsx`: Escape `'`.
*   [ ] `frontend/src/app/page.tsx`: Escape `'`.

### 4. TypeScript Strictness (Any Type)
*   [ ] `frontend/src/app/checkout/page.tsx`: Define a proper interface for `checkoutData` instead of `any`.
*   [ ] `frontend/src/lib/checkout-service.ts`: Change `any` to `Error` or `unknown`.

---

## ✅ Validation Criteria

1.  **Lint Success**: `npm run lint` passes with zero errors and minimal warnings.
2.  **Build Success**: `npm run build` completes successfully.