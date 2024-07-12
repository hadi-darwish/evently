-- Verify evently:create_organizers_table on pg

BEGIN;

-- XXX Add verifications here.
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'evently' AND table_name = 'organizers';

ROLLBACK;
