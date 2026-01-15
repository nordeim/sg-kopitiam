# Bug Fix Plan - Unused Variables and Types

**Objective:** Resolve the build failure by removing unused imports and variables identified by the TypeScript compiler and ESLint.

---

## 🛠️ Tasks

### 1. Clean `frontend/src/app/locations/page.tsx`
*   **File:** `frontend/src/app/locations/page.tsx`
*   **Action:** Remove unused imports: `RetroBadge` and `WaveDivider`.
*   **Checklist:**
    *   [ ] Remove `import { RetroBadge } from "@/components/ui/retro/badge"`
    *   [ ] Remove `import { WaveDivider } from "@/components/ui/wave-divider"`

### 2. Clean `frontend/src/components/layout/header.tsx`
*   **File:** `frontend/src/components/layout/header.tsx`
*   **Action:** Remove unused imports: `Menu` and `X`.
*   **Checklist:**
    *   [ ] Update import from `lucide-react` to only include `ShoppingCart`.

---

## ✅ Validation Criteria

1.  **Build Success**: `npm run build` completes successfully without `Type error: ... is declared but its value is never read.` errors.
2.  **Lint Success**: `npm run lint` passes without unused variable warnings.
