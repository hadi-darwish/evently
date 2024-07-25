-- Verify evently:login_function on pg

BEGIN;

-- XXX Add verifications here.
SELECT evently.login_function('test@example.com', 'password') IS NOT NULL AS result;

ROLLBACK;
