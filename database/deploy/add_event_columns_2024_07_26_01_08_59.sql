-- Deploy evently:add_event_columns_2024_07_26_01_08_59 to pg

BEGIN;

-- Add startDateTime column if it does not exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='start_datetime') THEN
    EXECUTE 'ALTER TABLE evently.events ADD COLUMN start_datetime TIMESTAMPTZ';
  END IF;
END $$;

-- Add endDateTime column if it does not exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='end_datetime') THEN
    EXECUTE 'ALTER TABLE evently.events ADD COLUMN end_datetime TIMESTAMPTZ';
  END IF;
END $$;

-- Add isFree column if it does not exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='is_free') THEN
    EXECUTE 'ALTER TABLE evently.events ADD COLUMN is_free BOOLEAN DEFAULT FALSE';
  END IF;
END $$;

-- Add price column if it does not exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='price') THEN
    EXECUTE 'ALTER TABLE evently.events ADD COLUMN price NUMERIC(10, 2)';
  END IF;
END $$;


DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='image_url') THEN
    EXECUTE 'ALTER TABLE evently.events ADD COLUMN image_url TEXT';
  END IF;
END $$;

-- Remove date column if it exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='date') THEN
    EXECUTE 'ALTER TABLE evently.events DROP COLUMN date';
  END IF;
END $$;

-- Remove time column if it exists
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='events' AND column_name='time') THEN
    EXECUTE 'ALTER TABLE evently.events DROP COLUMN time';
  END IF;
END $$;

COMMIT;