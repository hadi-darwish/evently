-- Revert evently:create_attendees_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.attendees;

COMMIT;
