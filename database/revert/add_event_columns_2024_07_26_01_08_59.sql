-- Revert evently:add_event_columns_2024_07_26_01_08_59 from pg

BEGIN;

-- Add back date and time columns if they were removed
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='date') THEN
    ALTER TABLE evently.events ADD COLUMN date DATE;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='time') THEN
    ALTER TABLE evently.events ADD COLUMN time TIME;
  END IF;
END $$;

-- Remove startDateTime, endDateTime, isFree, and price columns if they were added
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='start_datetime') THEN
    ALTER TABLE evently.events DROP COLUMN start_datetime;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='end_datetime') THEN
    ALTER TABLE evently.events DROP COLUMN end_datetime;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='is_free') THEN
    ALTER TABLE evently.events DROP COLUMN is_free;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='price') THEN
    ALTER TABLE evently.events DROP COLUMN price;
  END IF;

  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='image_url') THEN
    ALTER TABLE evently.events DROP COLUMN image_url;
  END IF;
END $$;

COMMIT;