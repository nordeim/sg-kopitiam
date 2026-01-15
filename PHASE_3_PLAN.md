# Phase 3: Interactive Components & State Management - Detailed Execution Plan

**Objective:** Implement the interactive "nervous system" of the application using Zustand for state management. This includes the Shopping Cart (with 9% GST logic), Menu Filtering, and a robust Undo/Redo history system for the cart, all wrapped in the "Avant-Garde Kopitiam" aesthetic.

**Estimated Effort:** 10-14 hours

---

## 🧠 Sub-Phase 3.1: Core State Logic (Zustand Stores)

> **Goal:** Create the business logic layer handling data persistence, financial calculations, and user intent.

### Files to Create

#### 1. `frontend/src/stores/cart-store.ts`
*   **Purpose:** Central repository for cart state and logic.
*   **Features:**
    *   **State:** `items[]`, `history[]` (for undo/redo), `future[]`.
    *   **Actions:** `addItem`, `removeItem`, `updateQuantity`, `clearCart`.
    *   **Computations:** `subtotal`, `gst` (9%), `total`, `itemCount`.
    *   **Undo/Redo:** `undo()`, `redo()`, internal tracking of last 10 actions.
    *   **Persistence:** `persist` middleware to `localStorage` (key: `kopitiam-cart`).
*   **Interfaces:**
    *   `CartItem`: `{ id, name, price, quantity, options? }`.
    *   `CartState`: State + Actions.
*   **Checklist:**
    *   [ ] GST calculation uses `utils/calculateGST` (from Phase 1).
    *   [ ] Duplicate items increment quantity instead of adding new row.
    *   [ ] Undo history is limited to 10 steps.
    *   [ ] Data persists on reload.

#### 2. `frontend/src/stores/filter-store.ts`
*   **Purpose:** Manage menu filter state (URL sync).
*   **Features:**
    *   **State:** `activeCategory` (default: 'all').
    *   **Actions:** `setCategory`.
*   **Checklist:**
    *   [ ] Simple string state management.

---

## 🛒 Sub-Phase 3.2: UI Components (Cart & Feedback)

> **Goal:** Build the visual interface for the state logic, applying the Retro design system.

### Files to Create

#### 1. `frontend/src/components/ui/retro/sheet.tsx`
*   **Purpose:** A side-drawer component for the Cart (more standard UX than a center modal for lists).
*   **Features:**
    *   Wraps Radix UI `Dialog` (styled as a sheet).
    *   **Animation:** Slide in from right (`data-[state=open]:slide-in-from-right`).
    *   **Styling:** Cream background, Espresso borders, specific "ticket" aesthetic.
*   **Checklist:**
    *   [ ] accessible dismiss button.
    *   [ ] Overlay backdrop blur.

#### 2. `frontend/src/components/cart/cart-sheet.tsx`
*   **Purpose:** The actual Cart UI composition.
*   **Features:**
    *   **Header:** "Your Order" in `Fraunces` font.
    *   **List:** Scrollable list of items with `CartItem` component.
    *   **Footer:** Financial breakdown (Subtotal, GST, Total) + Checkout Button.
    *   **Empty State:** "Your table is empty" with an illustration.
*   **Checklist:**
    *   [ ] Connects to `cart-store`.
    *   [ ] Updates in real-time.
    *   [ ] Displays "9% GST" explicitly.

#### 3. `frontend/src/components/cart/add-to-cart-btn.tsx`
*   **Purpose:** Smart button for menu cards.
*   **Features:**
    *   Triggers `cartStore.addItem`.
    *   Triggers Toast notification.
    *   **Micro-interaction:** Button scales/pulses on click.
*   **Checklist:**
    *   [ ] Accepts product data props.

#### 4. `frontend/src/components/ui/retro/toast.tsx` (Wrap Sonner)
*   **Purpose:** Custom styling for toast notifications.
*   **Features:**
    *   Uses `sonner` library.
    *   **Styling:** Retro cards (cream bg, espresso text, border).
    *   **Undo Action:** Toast includes an "Undo" button when an item is removed.
*   **Checklist:**
    *   [ ] "Added to cart" success state.
    *   [ ] "Removed from cart" state with Undo button.

#### 5. `frontend/src/components/menu/filter-bar.tsx`
*   **Purpose:** Connects the static filter UI to the store.
*   **Features:**
    *   Maps categories to buttons.
    *   Active state styling (Solid vs Outline).
*   **Checklist:**
    *   [ ] Updates `filter-store`.

---

## 🎹 Sub-Phase 3.3: Integration & Advanced Interaction

> **Goal:** Wire everything together and implement keyboard accessibility.

### Tasks

#### 1. Update `frontend/src/app/layout.tsx`
*   **Action:** Add `<Toaster />` component to root layout.

#### 2. Update `frontend/src/components/layout/header.tsx`
*   **Action:** Connect the static Cart Icon to open `CartSheet`.
*   **Action:** Bind the badge count to `cartStore.itemCount`.

#### 3. Keyboard Shortcuts Listener (`use-keyboard-shortcuts.ts`)
*   **Purpose:** Global listener for Undo/Redo.
*   **Features:**
    *   `Ctrl+Z` / `Cmd+Z` -> `cartStore.undo()`.
    *   `Ctrl+Shift+Z` / `Cmd+Shift+Z` -> `cartStore.redo()`.
*   **Checklist:**
    *   [ ] Only triggers when cart is relevant (or globally).

---

## ✅ Phase 3 Validation Criteria

1.  **Financial Accuracy**: Adding 2 items ($3.50 + $5.50 = $9.00) results in:
    *   Subtotal: ~$8.26
    *   GST (9%): ~$0.74
    *   Total: $9.00
    *   *Verified via Cart Sheet display.*
2.  **Persistence**: Reloading the page retains the cart contents.
3.  **Undo/Redo**:
    *   Add Item A -> Remove Item A -> Press Undo -> Item A reappears.
    *   Ctrl+Z works.
4.  **Flow**:
    *   Clicking "Add to Cart" on Menu page updates Header Badge immediately.
    *   Opening Cart Sheet shows the correct items.
