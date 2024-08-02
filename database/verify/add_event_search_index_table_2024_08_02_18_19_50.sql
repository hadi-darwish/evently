-- Verify evently:add_event_search_index_table_2024_08_02_18_19_50 on pg

BEGIN;

-- XXX Add verifications here.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'evently' AND table_name = 'event_search_index') THEN
    RAISE EXCEPTION 'Table evently.event_search_index does not exist';
  END IF;
END $$;

ROLLBACK;
