-- Revert evently:add_roles_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.roles;

COMMIT;
