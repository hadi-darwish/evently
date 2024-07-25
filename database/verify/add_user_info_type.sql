-- Verify evently:add_user_info_type on pg

BEGIN;

-- XXX Add verifications here.
SELECT typname
FROM pg_type
WHERE typname = 'user_info';

ROLLBACK;
