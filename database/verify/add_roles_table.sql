-- Verify evently:add_roles_table on pg

BEGIN;

-- XXX Add verifications here.
SELECT 'roles table exists' WHERE EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_schema = 'evently'
  AND table_name = 'roles'
);

ROLLBACK;
