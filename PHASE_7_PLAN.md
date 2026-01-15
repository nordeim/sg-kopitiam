# Phase 7: Testing & Quality Assurance - Detailed Execution Plan

**Objective:** Implement a comprehensive testing strategy covering End-to-End (E2E) flows, visual regression, performance audits, and Singapore-specific compliance edge cases.

**Estimated Effort:** 12-16 hours

---

## 🧪 Sub-Phase 7.1: Frontend Testing (E2E & Component)

> **Goal:** Ensure the critical user paths (Menu -> Cart -> Checkout) are functional and visually consistent.

### Files to Create

#### 1. `frontend/tests/e2e/checkout.spec.ts`
*   **Purpose:** Playwright E2E test for the full purchase flow.
*   **Features:**
    *   Navigate to Menu.
    *   Add items to Cart.
    *   Complete Checkout steps (Details, Pickup).
    *   Verify PDPA consent requirement.
*   **Checklist:**
    *   [ ] Verifies total calculation includes 9% GST.
    *   [ ] Verifies cart persistence.

#### 2. `frontend/tests/visual/mockup-comparison.spec.ts`
*   **Purpose:** Automated visual regression.
*   **Features:**
    *   Compare rendered components against the authoritative HTML mockup.
*   **Checklist:**
    *   [ ] Snapshots match within 5% pixel threshold.

---

## 🐘 Sub-Phase 7.2: Backend Testing (Domain & API)

> **Goal:** Validate financial precision, inventory safety, and compliance logging.

### Files to Create

#### 1. `backend/tests/Feature/OrderPrecisionTest.php`
*   **Purpose:** Verify `DECIMAL(10,4)` handling.
*   **Features:**
    *   Test orders with fractional cent values.
    *   Verify GST breakdown matches IRAS standards.
*   **Checklist:**
    *   [ ] Sub-cent precision verified in DB.

#### 2. `backend/tests/Feature/InventoryConcurrencyTest.php`
*   **Purpose:** Verify Two-Phase Lock safety.
*   **Features:**
    *   Simulate concurrent order attempts for limited stock.
*   **Checklist:**
    *   [ ] Prevents overselling.

---

## 🇸🇬 Sub-Phase 7.3: Compliance & Performance Audits

> **Goal:** Meet Singapore regulatory standards and performance budgets.

### Files to Create

#### 1. `frontend/.lighthouserc.json`
*   **Purpose:** Enforce performance budgets.
*   **Features:**
    *   LCP < 2.5s.
    *   CLS < 0.1.
    *   Accessibility score > 90.
*   **Checklist:**
    *   [ ] Checked in CI.

---

## ✅ Phase 7 Validation Criteria

1.  **Test Coverage**: Both Frontend and Backend reach > 80% coverage.
2.  **Compliance**:
    *   GST calculations verified for 10+ edge cases.
    *   PDPA audit logs verified for each test order.
3.  **Performance**: Lighthouse audit passes on local build.
4.  **Resilience**: Concurrency tests pass without race conditions.
