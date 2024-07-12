-- Verify evently:add_user_role on pg

BEGIN;

-- XXX Add verifications here.
SELECT column_name
FROM information_schema.columns
WHERE table_schema = 'evently' AND table_name = 'users' AND column_name = 'role_id';

ROLLBACK;
