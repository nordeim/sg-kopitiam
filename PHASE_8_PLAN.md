# Phase 8: Operations & Administration - Detailed Execution Plan

**Objective:** Build a comprehensive admin dashboard for order management, inventory tracking, customer support, and analytics. Implement Role-Based Access Control (RBAC) to secure operational data.

**Estimated Effort:** 14-18 hours

---

## 🛡️ Sub-Phase 8.1: Admin Shell & Security

> **Goal:** Secure the admin routes and establish the layout skeleton.

### Files to Create/Update

#### 1. `backend/database/seeders/RolesAndPermissionsSeeder.php`
*   **Purpose:** Define RBAC hierarchy.
*   **Features:**
    *   Roles: `super-admin`, `store-manager`.
    *   Permissions: `view-orders`, `manage-inventory`, `export-data`.
*   **Checklist:**
    *   [ ] Super Admin bypasses all checks.

#### 2. `frontend/src/app/admin/layout.tsx`
*   **Purpose:** Authenticated shell for admin pages.
*   **Features:**
    *   Sidebar Navigation (Dashboard, Orders, Inventory, Customers).
    *   Header (User profile, Logout).
    *   Auth Guard (Redirects if not logged in or authorized).
*   **Checklist:**
    *   [ ] Protected by `useAdminAuth` hook.

#### 3. `frontend/src/components/admin/sidebar.tsx`
*   **Purpose:** Navigation menu.
*   **Features:**
    *   Responsive (Collapsible on mobile).
    *   Active state highlighting.
*   **Checklist:**
    *   [ ] Retro-styled admin UI (distinct from consumer facing).

---

## 📦 Sub-Phase 8.2: Core Management Modules

> **Goal:** Enable operational workflows for Orders, Inventory, and Compliance.

### Files to Create

#### 1. `frontend/src/app/admin/orders/page.tsx`
*   **Purpose:** Order processing hub.
*   **Features:**
    *   Data Table with sorting/filtering.
    *   Status Badges (Pending: Yellow, Confirmed: Blue, Completed: Green).
    *   Actions: "Mark Ready", "Complete", "Refund".
*   **Checklist:**
    *   [ ] Real-time updates (optional, or refresh button).

#### 2. `frontend/src/app/admin/inventory/page.tsx`
*   **Purpose:** Stock management.
*   **Features:**
    *   Editable stock levels.
    *   Low stock warning indicators (< 10).
    *   Active/Inactive toggle.
*   **Checklist:**
    *   [ ] Optimistic UI updates.

#### 3. `frontend/src/app/admin/customers/page.tsx` (PDPA)
*   **Purpose:** Compliance viewing.
*   **Features:**
    *   List of consents with timestamps and hashes.
    *   **Export Button**: Download CSV of user data (Right to Portability).
*   **Checklist:**
    *   [ ] Masked PII in list view.

---

## 📊 Sub-Phase 8.3: Analytics & Monitoring

> **Goal:** Provide insights into business performance and system health.

### Files to Create

#### 1. `frontend/src/app/admin/dashboard/page.tsx`
*   **Purpose:** High-level overview.
*   **Features:**
    *   **KPI Cards**: Total Revenue, Daily Orders, Avg Order Value.
    *   **Chart**: Sales over time (Recharts).
    *   **Top Products**: List of bestsellers.
*   **Checklist:**
    *   [ ] Date range picker.

#### 2. `frontend/src/app/admin/invoices/page.tsx`
*   **Purpose:** InvoiceNow monitoring.
*   **Features:**
    *   Status log of PEPPOL transmissions.
    *   Retry action for failed submissions.
*   **Checklist:**
    *   [ ] Error log display.

#### 3. `backend/app/Http/Controllers/Api/Admin/DashboardController.php`
*   **Purpose:** Aggregated analytics endpoint.
*   **Features:**
    *   `GET /admin/stats`: Returns calculated metrics.
    *   Optimized queries (Cache heavily).
*   **Checklist:**
    *   [ ] 9% GST excluded from revenue stats (Net Sales).

---

## ✅ Phase 8 Validation Criteria

1.  **Security**: Accessing `/admin` without credentials redirects to login.
2.  **Workflow**:
    *   Changing Order Status in Admin reflects in User History (if implemented) and Database.
    *   Updating Stock in Admin prevents overselling on Frontend.
3.  **Compliance**:
    *   Customer Export generates a valid CSV.
    *   PDPA Consent logs are visible.
4.  **Performance**: Dashboard loads under 2s even with calculated stats.
