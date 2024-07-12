-- Revert evently:create_organizers_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.organizers;

COMMIT;
