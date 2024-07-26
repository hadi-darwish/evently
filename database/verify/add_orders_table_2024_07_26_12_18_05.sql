-- Verify evently:add_orders_table_2024_07_26_12_18_05 on pg

BEGIN;

-- XXX Add verifications here.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name='orders') THEN
    RAISE EXCEPTION 'Table orders does not exist';
  END IF;
END $$;

ROLLBACK;
