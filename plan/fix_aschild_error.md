# Bug Fix Plan - React asChild Prop Warning

**Objective:** Fix the React warning "does not recognize the asChild prop on a DOM element" by properly implementing the Slot pattern in the `RetroButton` component.

---

## 🛠️ Tasks

### 1. Implement Radix Slot in RetroButton
*   **File:** `frontend/src/components/ui/retro/button.tsx`
*   **Action:** 
    *   Import `Slot` from `@radix-ui/react-slot`.
    *   Destructure `asChild` from props.
    *   Use `Slot` if `asChild` is true, otherwise use `button`.
*   **Checklist:**
    *   [ ] Ensure `asChild` is removed from `props` before spreading onto the element.
    *   [ ] Verify the component still supports refs.

---

## ✅ Validation Criteria

1.  **Console Verification**: The error "React does not recognize the asChild prop on a DOM element" should no longer appear in the browser console.
2.  **Visual Verification**: Elements using `asChild` (like links in the Hero section) should still render with the correct button styles.
3.  **Ref Verification**: Refs passed to `RetroButton` should continue to work.
