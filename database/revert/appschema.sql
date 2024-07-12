-- Revert evently:appschema from pg

BEGIN;

-- XXX Add DDLs here.
DROP SCHEMA IF EXISTS evently CASCADE;

COMMIT;
