-- Revert evently:sessions from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS sessions;

COMMIT;
