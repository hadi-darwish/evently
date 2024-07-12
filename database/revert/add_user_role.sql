-- Revert evently:add_user_role from pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE evently.users DROP COLUMN role_id;

COMMIT;
