-- Verify evently:add_deleted_at_to_events_2024_07_27_16_34_04 on pg

BEGIN;

-- XXX Add verifications here.
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'evently'
        AND table_name = 'events'
        AND column_name = 'deleted_at'
    ) THEN
        RAISE EXCEPTION 'Column deleted_at does not exist in evently.events';
    END IF;
END $$;

ROLLBACK;
