-- Verify evently:add_event_columns_2024_07_26_01_08_59 on pg

BEGIN;

-- Check that the new columns exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='start_datetime') THEN
    RAISE EXCEPTION 'Column start_datetime does not exist';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='end_datetime') THEN
    RAISE EXCEPTION 'Column end_datetime does not exist';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='is_free') THEN
    RAISE EXCEPTION 'Column is_free does not exist';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='price') THEN
    RAISE EXCEPTION 'Column price does not exist';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='image_url') THEN
      RAISE EXCEPTION 'Column image_url does not exist';
  END IF;
END $$;

-- Check that the old columns do not exist
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='date') THEN
    RAISE EXCEPTION 'Column date still exists';
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='time') THEN
    RAISE EXCEPTION 'Column time still exists';
  END IF;
END $$;

COMMIT;