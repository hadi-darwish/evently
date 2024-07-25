-- Revert evently:verification_token from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS verification_token;

COMMIT;
