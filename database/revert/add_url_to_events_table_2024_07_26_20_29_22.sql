-- Revert evently:add_url_to_events_table_2024_07_26_20_29_22 from pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE evently.events
DROP COLUMN url;

COMMIT;
