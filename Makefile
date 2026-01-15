.PHONY: help install up down restart logs shell-backend shell-frontend migrate seed test lint format

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install all dependencies
	@echo "Installing dependencies..."
	docker-compose run --rm backend composer install
	docker-compose run --rm frontend npm install

up: ## Start all services
	docker-compose up -d

down: ## Stop all services
	docker-compose down

restart: ## Restart all services
	docker-compose restart

logs: ## Tail all logs
	docker-compose logs -f

logs-backend: ## Tail backend logs
	docker-compose logs -f backend

logs-frontend: ## Tail frontend logs
	docker-compose logs -f frontend

shell-backend: ## Open shell in backend container
	docker-compose exec backend sh

shell-frontend: ## Open shell in frontend container
	docker-compose exec frontend sh

migrate: ## Run database migrations
	docker-compose exec backend php artisan migrate

migrate-fresh: ## Fresh migration with seeders
	docker-compose exec backend php artisan migrate:fresh --seed

seed: ## Run database seeders
	docker-compose exec backend php artisan db:seed

test: ## Run all tests
	docker-compose exec backend php artisan test
	docker-compose exec frontend npm test

test-backend: ## Run backend tests only
	docker-compose exec backend php artisan test

test-frontend: ## Run frontend tests only
	docker-compose exec frontend npm test

lint: ## Lint all code
	docker-compose exec backend ./vendor/bin/pint --test
	docker-compose exec frontend npm run lint

format: ## Format all code
	docker-compose exec backend ./vendor/bin/pint
	docker-compose exec frontend npm run format

