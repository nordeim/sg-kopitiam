# Phase 4: Backend Domain Model & API Contracts - Detailed Execution Plan

**Objective:** Define Laravel 12 backend models, controllers, and API contracts that will power the frontend. Implement `DECIMAL(10,4)` for precise GST calculations, two-phase inventory management, and PDPA compliance services.

**Estimated Effort:** 16-20 hours

---

## 🗄️ Sub-Phase 4.1: Database Schema & Migrations

> **Goal:** Create the database structure acting as the single source of truth for products, orders, and compliance data.

### Files to Create

#### 1. `backend/database/migrations/xxxx_create_products_table.php`
*   **Purpose:** Store menu items.
*   **Features:**
    *   `id` (UUID).
    *   `price`: **`DECIMAL(10, 4)`** (Critical for 9% GST precision).
    *   `stock_quantity`: Integer.
    *   `category`, `name`, `description`.
    *   `image_url`, `tags` (JSON).
*   **Checklist:**
    *   [ ] Price precision is exactly `(10, 4)`.
    *   [ ] Indexes on `category` and `active` status.

#### 2. `backend/database/migrations/xxxx_create_locations_table.php`
*   **Purpose:** Store physical store info.
*   **Features:**
    *   `id` (UUID).
    *   `name`, `address`, `postal_code`.
    *   `features` (JSON): e.g., ["Wheelchair Accessible", "Halal"].
    *   `operating_hours` (JSON).
*   **Checklist:**
    *   [ ] JSON columns support structured data.

#### 3. `backend/database/migrations/xxxx_create_orders_table.php`
*   **Purpose:** Transactional records.
*   **Features:**
    *   `subtotal`, `gst_amount`, `total_amount`: **`DECIMAL(10, 4)`**.
    *   `status`: enum ('pending', 'confirmed', 'completed', 'cancelled').
    *   `invoice_number`: String (Unique).
    *   `pdpa_consent_id`: Foreign key.
*   **Checklist:**
    *   [ ] Financial columns use high precision.

#### 4. `backend/database/migrations/xxxx_create_pdpa_consents_table.php`
*   **Purpose:** Audit trail for data privacy.
*   **Features:**
    *   `anonymized_identifier`: SHA256 hash.
    *   `consent_type`: String.
    *   `ip_address`, `user_agent`.
    *   `wording_hash`: Hash of the specific consent text agreed to.
*   **Checklist:**
    *   [ ] Captures necessary audit fields.

---

## 🧱 Sub-Phase 4.2: Domain Models & Business Logic

> **Goal:** Implement Eloquent models with accessors, mutators, and relationships.

### Files to Create

#### 1. `backend/app/Models/Product.php`
*   **Purpose:** Product logic.
*   **Features:**
    *   Casts `price` to float (for easy usage) but stores as decimal.
    *   Scope `active()`.
*   **Checklist:**
    *   [ ] `Fillable` fields defined.

#### 2. `backend/app/Models/Order.php`
*   **Purpose:** Order logic.
*   **Features:**
    *   Relationship: `items()` (HasMany).
    *   Helper: `calculateTotals()` (Computes GST 9% dynamically).
*   **Checklist:**
    *   [ ] GST calculation logic centralized here.

#### 3. `backend/app/Models/PdpaConsent.php`
*   **Purpose:** Compliance logic.
*   **Features:**
    *   Immutable (create only, no update).
*   **Checklist:**
    *   [ ] Timestamps handled correctly.

---

## ⚙️ Sub-Phase 4.3: Core Services

> **Goal:** Implement the complex business logic isolated from controllers.

### Files to Create

#### 1. `backend/app/Services/InventoryService.php`
*   **Purpose:** Thread-safe stock management.
*   **Features:**
    *   **Two-Phase Locking:**
        1.  **Soft Reserve (Redis):** Fast, TTL-based (15 mins).
        2.  **Hard Commit (Postgres):** Transactional `lockForUpdate()`.
*   **Checklist:**
    *   [ ] Redis atomic decrement implemented.
    *   [ ] DB transaction rollback handling.

#### 2. `backend/app/Services/PdpaService.php`
*   **Purpose:** Data privacy handling.
*   **Features:**
    *   `pseudonymize(string $email)`: Returns SHA256 hash with salt.
    *   `logConsent(...)`: Creates audit record.
*   **Checklist:**
    *   [ ] Salt management via ENV.

---

## 📡 Sub-Phase 4.4: API Layer

> **Goal:** Expose domain logic via RESTful endpoints.

### Files to Create

#### 1. `backend/app/Http/Controllers/Api/ProductController.php`
*   **Endpoints:** `GET /products`, `GET /products/{id}`.
*   **Features:** Filtering by category.

#### 2. `backend/app/Http/Controllers/Api/LocationController.php`
*   **Endpoints:** `GET /locations`.

#### 3. `backend/app/Http/Controllers/Api/OrderController.php`
*   **Endpoints:** `POST /orders`.
*   **Features:**
    *   Validates inventory.
    *   Calculates final GST.
    *   Creates Pending order.
*   **Checklist:**
    *   [ ] Returns Invoice Number.

#### 4. `backend/routes/api.php`
*   **Purpose:** Route definitions.
*   **Checklist:**
    *   [ ] API Versioning (v1).

---

## 🔗 Sub-Phase 4.5: Frontend Integration

> **Goal:** Type definitions for the frontend to consume.

### Files to Create

#### 1. `frontend/src/lib/api-client.ts`
*   **Purpose:** TypeScript interfaces mirroring Backend models.
*   **Features:**
    *   `interface Product`, `interface Order`, `interface Location`.
    *   API fetcher functions.
*   **Checklist:**
    *   [ ] Types match Database Schema exactly.

---

## ✅ Phase 4 Validation Criteria

1.  **Database Precision**: `Product` table definition shows `DECIMAL(10,4)` for price.
2.  **Inventory Safety**: Concurrent requests to reserve stock result in correct decrement (tested via script or manual concurrent calls).
3.  **GST Logic**: Creating an order with $10.00 subtotal results in exactly $0.90 GST (if exclusive) or correctly back-calculated if inclusive.
4.  **PDPA**: Consent table records hash of user identifier, not raw PII.
5.  **Connectivity**: Frontend can fetch product list from Laravel API.
