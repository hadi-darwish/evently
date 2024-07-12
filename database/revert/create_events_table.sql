-- Revert evently:create_events_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.events;

COMMIT;
