-- Verify evently:users on pg

BEGIN;

-- XXX Add verifications here.
SELECT id, username, password, email, phone_number, address, city, gender, created_at, updated_at
    FROM evently.users
WHERE FALSE;

-- check if there is a Type named gender
SELECT EXISTS (
    SELECT 1
    FROM pg_type
    WHERE typname = 'gender'
);

ROLLBACK;
