-- Verify evently:create_registrations_table on pg

BEGIN;

-- XXX Add verifications here.
SELECT 'Table exists' WHERE EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_schema = 'evently' AND table_name = 'registrations'
);

ROLLBACK;
