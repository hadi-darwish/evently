-- Deploy evently:add_extensions_2024_07_05_22_11_52 to pg

BEGIN;

-- Create plpgsql extension if not exists
CREATE EXTENSION IF NOT EXISTS plpgsql;

-- Create pgcrypto extension if not exists
CREATE EXTENSION IF NOT EXISTS pgcrypto;

COMMIT;