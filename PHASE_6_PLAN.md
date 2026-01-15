# Phase 6: Infrastructure & Deployment - Detailed Execution Plan

**Objective:** Containerize application for local development and production deployment with monitoring, backups, and CI/CD pipeline.

**Estimated Effort:** 10-14 hours

---

## 🐳 Sub-Phase 6.1: Production Containerization

> **Goal:** Create optimized multi-stage Dockerfiles for Backend (Laravel) and Frontend (Next.js).

### Files to Create

#### 1. `backend/Dockerfile.prod`
*   **Purpose:** Production-ready PHP-FPM image.
*   **Features:**
    *   Base: `php:8.3-fpm-alpine`.
    *   **Multi-stage:** Build stage (composer) -> Final stage.
    *   **Optimization:** `opcache` enabled, `composer install --no-dev`.
    *   **Permissions:** Run as `www-data`.
*   **Checklist:**
    *   [ ] Copies `nginx.conf` (if bundling) or exposes 9000.
    *   [ ] Removes source code (cleanup).

#### 2. `frontend/Dockerfile.prod`
*   **Purpose:** Production-ready Next.js image.
*   **Features:**
    *   Base: `node:22-alpine`.
    *   **Multi-stage:** Deps -> Builder -> Runner.
    *   **Optimization:** Standalone output (`output: 'standalone'` in next.config).
*   **Checklist:**
    *   [ ] Copies `.next/standalone`.
    *   [ ] Runs as non-root user `nextjs`.

#### 3. `nginx/nginx.conf`
*   **Purpose:** Reverse Proxy & SSL Termination.
*   **Features:**
    *   Routes `/api` to Backend.
    *   Routes `/` to Frontend.
    *   Security headers (HSTS, X-Frame-Options).
*   **Checklist:**
    *   [ ] Upstream definitions.

---

## 🚀 Sub-Phase 6.2: CI/CD Pipeline

> **Goal:** Automate testing and deployment.

### Files to Create

#### 1. `.github/workflows/ci.yml`
*   **Purpose:** Continuous Integration.
*   **Features:**
    *   Triggers on `push` to `main`.
    *   **Backend Job:** Setup PHP, run `pest`, lint.
    *   **Frontend Job:** Setup Node, run `vitest`, `lint`, build.
*   **Checklist:**
    *   [ ] Caches dependencies.

#### 2. `.github/workflows/deploy.yml`
*   **Purpose:** Deployment (CD).
*   **Features:**
    *   Triggers on `release`.
    *   Builds Docker images.
    *   Pushes to Registry (GHCR/ECR).
    *   Deploys to Server (SSH/K8s).

---

## 🛡️ Sub-Phase 6.3: Operations & Monitoring

> **Goal:** Ensure system reliability.

### Files to Create

#### 1. `infra/monitoring/prometheus.yml`
*   **Purpose:** Metrics collection.

#### 2. `scripts/backup-db.sh`
*   **Purpose:** Database backup script.
*   **Features:**
    *   `pg_dump` to S3/Local.
    *   Retention policy (keep last 7 days).

---

## ✅ Phase 6 Validation Criteria

1.  **Builds**: `docker build -f backend/Dockerfile.prod` succeeds.
2.  **Size**: Final images are optimized (Backend < 200MB, Frontend < 150MB).
3.  **Security**: Nginx config scores A+ on basic header checks (simulated).
4.  **Pipeline**: CI yaml syntax is valid.