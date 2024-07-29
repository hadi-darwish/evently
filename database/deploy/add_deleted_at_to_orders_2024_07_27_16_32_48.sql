-- Deploy evently:add_deleted_at_to_orders_2024_07_27_16_32_48 to pg

BEGIN;

-- XXX Add DDLs here.
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'evently'
        AND table_name = 'orders'
        AND column_name = 'deleted_at'
    ) THEN
        ALTER TABLE evently.orders
        ADD COLUMN deleted_at TIMESTAMPTZ;
    END IF;
END $$;

COMMIT;
