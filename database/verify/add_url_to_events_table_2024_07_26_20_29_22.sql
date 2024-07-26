-- Verify evently:add_url_to_events_table_2024_07_26_20_29_22 on pg

BEGIN;

-- XXX Add verifications here.
SELECT 1
FROM information_schema.columns
WHERE table_name = 'events'
  AND column_name = 'url'
  AND table_schema = 'evently';

ROLLBACK;
