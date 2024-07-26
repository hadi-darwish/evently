-- Revert evently:organizer_by_users_id_2024_07_26_21_38_09 from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS evently.organizerByUsersId(INT);

COMMIT;
