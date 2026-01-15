#!/bin/bash
set -e

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="./backups"
DB_CONTAINER="postgres"
DB_USER="brew_user"
DB_NAME="morning_brew"

mkdir -p $BACKUP_DIR

echo "📦 Starting backup for $DB_NAME at $TIMESTAMP..."

# Dump Database
docker exec $DB_CONTAINER pg_dump -U $DB_USER $DB_NAME > "$BACKUP_DIR/db_backup_$TIMESTAMP.sql"

# Compress
gzip "$BACKUP_DIR/db_backup_$TIMESTAMP.sql"

# Cleanup old backups (Keep last 7 days)
find $BACKUP_DIR -name "db_backup_*.sql.gz" -mtime +7 -delete

echo "✅ Backup completed: $BACKUP_DIR/db_backup_$TIMESTAMP.sql.gz"
