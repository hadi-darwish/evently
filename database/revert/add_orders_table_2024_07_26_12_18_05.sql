-- Revert evently:add_orders_table_2024_07_26_12_18_05 from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.orders;

COMMIT;
