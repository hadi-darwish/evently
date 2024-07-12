-- Revert evently:create_registrations_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.registrations;

COMMIT;
