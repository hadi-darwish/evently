-- Verify evently:accounts on pg

BEGIN;

-- XXX Add verifications here.
SELECT 1 FROM accounts LIMIT 1;

ROLLBACK;
