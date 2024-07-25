-- Verify evently:verification_token on pg

BEGIN;

-- XXX Add verifications here.
SELECT 1 FROM verification_token LIMIT 1;

ROLLBACK;
