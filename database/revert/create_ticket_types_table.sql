-- Revert evently:create_ticket_types_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.ticket_types;

COMMIT;
