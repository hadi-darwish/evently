-- Revert evently:add_user_info_type from pg

BEGIN;

-- XXX Add DDLs here.
DROP TYPE IF EXISTS evently.user_info;

COMMIT;
