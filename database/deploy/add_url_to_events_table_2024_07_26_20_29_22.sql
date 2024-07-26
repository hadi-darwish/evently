-- Deploy evently:add_url_to_events_table_2024_07_26_20_29_22 to pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE evently.events
ADD COLUMN url VARCHAR(255);

COMMIT;
