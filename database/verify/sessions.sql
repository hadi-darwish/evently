-- Verify evently:sessions on pg

BEGIN;

-- XXX Add verifications here.
SELECT 1 FROM sessions LIMIT 1;

ROLLBACK;
