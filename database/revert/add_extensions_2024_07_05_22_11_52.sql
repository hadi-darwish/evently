-- Revert evently:add_extensions_2024_07_05_22_11_52 from pg

BEGIN;

-- Drop plpgsql extension if exists
DROP EXTENSION IF EXISTS plpgsql;

-- Drop pgcrypto extension if exists
DROP EXTENSION IF EXISTS pgcrypto;

COMMIT;