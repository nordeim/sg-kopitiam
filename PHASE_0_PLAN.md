# Phase 0: Infrastructure & Project Scaffolding - Detailed Execution Plan

**Objective:** Establish the foundational project structure, development environment, and infrastructure configuration that all subsequent phases will build upon. This phase lays the groundwork for the Backend-for-Frontend (BFF) architecture.

**Estimated Effort:** 4-6 hours

---

## 📂 Sub-Phase 0.1: Root Structure & Orchestration

> **Goal:** Set up the monorepo structure, Docker orchestration, and developer tooling.

### Files to Create

#### 1. `docker-compose.yml`
*   **Purpose:** Local development environment orchestration.
*   **Features:**
    *   **PostgreSQL 16**: Primary database with health checks.
    *   **Redis 7**: Cache and queue management.
    *   **Backend (Laravel)**: PHP 8.3 FPM service.
    *   **Frontend (Next.js)**: Node.js 22 development server.
    *   **Mailpit**: Local email testing (SMTP/UI).
*   **Checklist:**
    *   [ ] Services defined: postgres, redis, backend, frontend, mailpit.
    *   [ ] Volume mounts for persistence (db, redis) and hot-reloading (code).
    *   [ ] Network configuration (backend <-> db, frontend <-> backend).
    *   [ ] Health checks configured for dependent services.

#### 2. `Makefile`
*   **Purpose:** Developer experience shortcuts to standardize commands.
*   **Features:**
    *   `up`/`down`: Start/stop environment.
    *   `install`: Install dependencies for both stacks.
    *   `shell-backend`/`shell-frontend`: Access containers.
    *   `migrate`: Database migrations.
*   **Checklist:**
    *   [ ] All core commands implemented.
    *   [ ] Commands execute within Docker context where necessary.

#### 3. `infra/postgres/init.sql`
*   **Purpose:** Database initialization script.
*   **Features:**
    *   Enable `uuid-ossp` extension (for UUID primary keys).
    *   Enable `pgcrypto` extension (for hashing).
*   **Checklist:**
    *   [ ] Extensions enabled.
    *   [ ] Permissions granted.

#### 4. `.gitignore`
*   **Purpose:** Root-level version control exclusion.
*   **Features:**
    *   Ignore `node_modules`, `vendor`.
    *   Ignore environment files (`.env`).
    *   Ignore OS files (`.DS_Store`).
*   **Checklist:**
    *   [ ] Covers both PHP and Node.js ecosystems.

---

## 🐘 Sub-Phase 0.2: Backend Scaffolding (Laravel 12)

> **Goal:** Initialize the Laravel application container and configuration.

### Files to Create

#### 1. `backend/Dockerfile`
*   **Purpose:** Development container definition for Laravel.
*   **Features:**
    *   Base: `php:8.3-fpm-alpine`.
    *   Extensions: `pdo_pgsql`, `redis`, `bcmath`, `intl`.
    *   Tools: `composer`.
*   **Checklist:**
    *   [ ] PHP 8.3 installed.
    *   [ ] Required extensions enabled.

#### 2. `backend/composer.json` (Skeleton)
*   **Purpose:** PHP dependency manifest.
*   **Features:**
    *   Laravel 12 framework.
    *   packages: `laravel/sanctum`, `spatie/laravel-permission`.
*   **Checklist:**
    *   [ ] Valid JSON structure.
    *   [ ] Key dependencies listed.

#### 3. `backend/.env.example`
*   **Purpose:** Environment configuration template.
*   **Features:**
    *   Singapore Timezone (`Asia/Singapore`).
    *   GST Rate (`0.09`).
    *   Service credentials (DB, Redis, Stripe, etc.).
*   **Checklist:**
    *   [ ] All enterprise/compliance variables included.

---

## ⚛️ Sub-Phase 0.3: Frontend Scaffolding (Next.js 15)

> **Goal:** Initialize the Next.js application container and configuration.

### Files to Create

#### 1. `frontend/Dockerfile`
*   **Purpose:** Development container definition for Next.js.
*   **Features:**
    *   Base: `node:22-alpine`.
*   **Checklist:**
    *   [ ] Node 22 installed.

#### 2. `frontend/package.json` (Skeleton)
*   **Purpose:** Node.js dependency manifest.
*   **Features:**
    *   Next.js 15, React 19.
    *   Tailwind CSS 4.
    *   Radix UI primitives.
    *   Zustand, TanStack Query.
*   **Checklist:**
    *   [ ] Key dependencies listed.
    *   [ ] Scripts defined (`dev`, `build`, `lint`).

#### 3. `frontend/next.config.ts`
*   **Purpose:** Framework configuration.
*   **Features:**
    *   Typed routes enabled.
    *   Security headers.
    *   Image domains allowed.
*   **Checklist:**
    *   [ ] Configuration valid for Next.js 15.

#### 4. `frontend/tsconfig.json`
*   **Purpose:** TypeScript configuration.
*   **Features:**
    *   Strict mode enabled.
    *   Path aliases (`@/*`).
*   **Checklist:**
    *   [ ] Compiler options set for strict safety.

---

## ✅ Phase 0 Validation Criteria

1.  **Infrastructure Up**: `docker-compose up -d` starts all 5 containers successfully.
2.  **Connectivity**:
    *   Backend can reach Postgres (`php artisan db:monitor`).
    *   Backend can reach Redis.
    *   Frontend can fetch from Backend API.
3.  **Tooling**: `make help` displays available commands.
4.  **Configuration**: `.env` files are correctly populated from examples.
