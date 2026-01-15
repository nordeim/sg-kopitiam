-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create additional schemas if needed
CREATE SCHEMA IF NOT EXISTS audit;

-- Grant permissions (brew_user is created by the postgres image env vars)
-- We need to ensure the user has access to the schemas
GRANT ALL PRIVILEGES ON SCHEMA public TO brew_user;
GRANT ALL PRIVILEGES ON SCHEMA audit TO brew_user;
