-- verify/organizer_by_users_id_2024_07_26_21_38_09.sql
BEGIN;

-- Verify the function works as expected
SELECT * FROM evently.organizerByUsersId(1) LIMIT 1;

ROLLBACK;