-- Revert evently:create_tickets_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.tickets;

COMMIT;
