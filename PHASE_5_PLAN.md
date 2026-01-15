# Phase 5: Checkout Flow & Payment Integration - Detailed Execution Plan

**Objective:** Implement the end-to-end checkout experience, integrating Singapore-specific payment methods (PayNow via Stripe) and regulatory invoicing (InvoiceNow/PEPPOL UBL 2.1).

**Estimated Effort:** 14-18 hours

---

## 💳 Sub-Phase 5.1: Backend Payment & Invoicing Infrastructure

> **Goal:** Equip the backend to handle financial transactions and generate compliance documents.

### Files to Create

#### 1. `backend/app/Services/PaymentService.php`
*   **Purpose:** Abstraction layer for Stripe interactions.
*   **Features:**
    *   `createPaymentIntent(Order $order)`: Generates Stripe Intent for PayNow.
    *   `confirmPayment(string $paymentIntentId)`: Updates local order status.
*   **Interfaces:** Uses `stripe-php` SDK.
*   **Checklist:**
    *   [ ] Supports `paynow` payment method type.
    *   [ ] maps `order_id` to Stripe metadata.

#### 2. `backend/app/Services/InvoiceService.php`
*   **Purpose:** Generate UBL 2.1 XML for InvoiceNow/PEPPOL compliance.
*   **Features:**
    *   `generateXml(Order $order)`: Returns XML string.
    *   Maps: Supplier (Morning Brew) -> Customer (User) -> Line Items -> Tax (GST 9%).
*   **Checklist:**
    *   [ ] XML validates against PEPPOL BIS Billing 3.0 schema (structure check).
    *   [ ] GST category code 'S' (Standard) used for 9% items.

#### 3. `backend/app/Jobs/ProcessOrderJob.php`
*   **Purpose:** Async post-order processing.
*   **Features:**
    *   Triggers email receipt.
    *   Generates/Stores Invoice XML.
*   **Checklist:**
    *   [ ] Queued via Redis.

#### 4. `backend/app/Http/Controllers/Api/PaymentController.php`
*   **Purpose:** Handle Stripe Webhooks and Frontend callbacks.
*   **Features:**
    *   `POST /webhook`: Listens for `payment_intent.succeeded`.
    *   `GET /payment/success`: Frontend redirect target.
*   **Checklist:**
    *   [ ] Verifies Stripe Signature.

---

## 🛍️ Sub-Phase 5.2: Frontend Checkout Wizard

> **Goal:** Create a multi-step, distraction-free checkout experience with state preservation.

### Files to Create

#### 1. `frontend/src/app/checkout/page.tsx`
*   **Purpose:** Main orchestrator for the checkout flow.
*   **Features:**
    *   State: `step` ('details', 'pickup', 'payment', 'review').
    *   State: `checkoutData` (persisted in `sessionStorage` alongside cart).
    *   Layout: Two-column (Wizard Left, Sticky Summary Right).
*   **Checklist:**
    *   [ ] Validates step completion before advancing.

#### 2. `frontend/src/components/checkout/steps/customer-details.tsx`
*   **Purpose:** Collect contact info & PDPA consent.
*   **Features:**
    *   Fields: Name, Email, Phone.
    *   **PDPA**: Explicit checkbox "I consent to..." with version tracking.
*   **Checklist:**
    *   [ ] Zod validation for SG phone numbers (+65).

#### 3. `frontend/src/components/checkout/steps/pickup-scheduler.tsx`
*   **Purpose:** Select location and time.
*   **Features:**
    *   Location: Radio selection of `LOCATIONS`.
    *   Time: Native datetime-local or custom picker, bounded by operating hours.
*   **Checklist:**
    *   [ ] Prevents selecting past times.

#### 4. `frontend/src/components/checkout/order-summary.tsx`
*   **Purpose:** Persistent cost breakdown.
*   **Features:**
    *   Lists items.
    *   **Financials**: Explicit Subtotal, GST (9%), Total.
*   **Checklist:**
    *   [ ] Updates dynamically as cart changes.

---

## 🔄 Sub-Phase 5.3: Integration & Confirmation

> **Goal:** Connect the Frontend Wizard to the Backend Order API and handle the "Happy Path".

### Files to Create

#### 1. `frontend/src/app/order-confirmation/page.tsx`
*   **Purpose:** Success landing page.
*   **Features:**
    *   Confetti animation (Retro style).
    *   Display Invoice Number (e.g., `INV-MB-2024-XXXX`).
    *   "Download Invoice" button (links to generated PDF/XML).
*   **Checklist:**
    *   [ ] Clears Cart Store upon load.

#### 2. `frontend/src/lib/checkout-service.ts`
*   **Purpose:** Encapsulate API calls for order placement.
*   **Features:**
    *   `submitOrder(payload)`: Calls `POST /api/orders`.
*   **Checklist:**
    *   [ ] Handles 422 Validation errors gracefully.

---

## ✅ Phase 5 Validation Criteria

1.  **PayNow Flow**:
    *   Selecting PayNow generates a QR Code (or simulation in Test Mode).
    *   Success callback redirects to Confirmation page.
2.  **Compliance**:
    *   Generated Order in DB has `pdpa_consent_id`.
    *   Invoice XML contains correct GST (9%) calculated values.
3.  **Data Integrity**:
    *   Stock is decremented in DB (via Phase 4 InventoryService).
    *   Double-submission is prevented (Idempotency).
4.  **UX**:
    *   User cannot proceed without PDPA consent.
    *   Cart is cleared only after successful order creation.
