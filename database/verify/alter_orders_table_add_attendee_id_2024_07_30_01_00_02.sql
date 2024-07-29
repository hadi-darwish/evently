-- Verify evently:alter_orders_table_add_attendee_id_2024_07_30_01_00_02 on pg

BEGIN;

-- XXX Add verifications here.
-- Verify evently:alter_orders_table_add_attendee_id to pg

SELECT 1
FROM information_schema.columns
WHERE table_schema = 'evently'
  AND table_name = 'orders'
  AND column_name = 'attendee_id';

SELECT 1
FROM information_schema.table_constraints
WHERE table_schema = 'evently'
  AND table_name = 'orders'
  AND constraint_name = 'fk_attendee';

ROLLBACK;
