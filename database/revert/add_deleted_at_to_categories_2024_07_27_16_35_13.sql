-- Revert evently:add_deleted_at_to_categories_2024_07_27_16_35_13 from pg

BEGIN;

-- XXX Add DDLs here.

DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM information_schema.columns
        WHERE table_schema = 'evently'
        AND table_name = 'categories'
        AND column_name = 'deleted_at'
    ) THEN
        ALTER TABLE evently.categories
        DROP COLUMN deleted_at;
    END IF;
END $$;

COMMIT;
