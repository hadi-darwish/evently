-- Revert evently:accounts from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS accounts;

COMMIT;
