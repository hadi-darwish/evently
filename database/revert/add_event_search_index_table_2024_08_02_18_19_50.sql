-- Revert evently:add_event_search_index_table_2024_08_02_18_19_50 from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS evently.search_event_indices(search_term TEXT) CASCADE;
DROP TRIGGER IF EXISTS event_search_index_trigger ON evently.events;
DROP FUNCTION IF EXISTS evently.update_event_search_index() CASCADE;
DROP TABLE evently.event_search_index;

COMMIT;
