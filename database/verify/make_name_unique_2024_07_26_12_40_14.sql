-- Verify evently:make_name_unique_2024_07_26_12_40_14 on pg

BEGIN;

-- Check that the unique constraint exists on the name column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM information_schema.table_constraints
    WHERE table_name = 'categories'
      AND constraint_type = 'UNIQUE'
      AND constraint_name = 'unique_name'
  ) THEN
    RAISE EXCEPTION 'Unique constraint on name column does not exist';
  END IF;
END $$;

COMMIT;
