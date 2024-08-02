-- Deploy evently:add_event_search_index_table_2024_08_02_18_19_50 to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE IF NOT EXISTS evently.event_search_index (
  id SERIAL PRIMARY KEY,
  event_id INTEGER REFERENCES evently.events(id),
  title TEXT,
  description TEXT,
  category_id INTEGER REFERENCES evently.categories(id),
  created_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP,
  search_vector TSVECTOR
);
CREATE UNIQUE INDEX unique_event_id_idx ON evently.event_search_index(event_id);
CREATE INDEX event_search_idx ON evently.event_search_index USING gin(search_vector);


CREATE OR REPLACE FUNCTION evently.update_event_search_index() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' OR TG_OP = 'UPDATE' THEN
    INSERT INTO evently.event_search_index (event_id, title, description, category_id, deleted_at, search_vector)
    VALUES (NEW.id, NEW.title, NEW.description, NEW.categories_id, NEW.deleted_at, to_tsvector('english', NEW.title || ' ' || NEW.description))
    ON CONFLICT (event_id) DO UPDATE
    SET title = EXCLUDED.title,
        description = EXCLUDED.description,
        category_id = EXCLUDED.category_id,
        deleted_at = EXCLUDED.deleted_at,
        search_vector = EXCLUDED.search_vector;
  ELSIF TG_OP = 'DELETE' THEN
    DELETE FROM evently.event_search_index WHERE event_id = OLD.id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER event_search_index_trigger
AFTER INSERT OR UPDATE OR DELETE ON evently.events
FOR EACH ROW EXECUTE FUNCTION evently.update_event_search_index();


CREATE OR REPLACE FUNCTION evently.search_event_indices(
  search_term TEXT DEFAULT NULL,
  category_id INT DEFAULT NULL,
  order_by TEXT DEFAULT 'created_at DESC',
  "limit" INT DEFAULT 10,
  "offset" INT DEFAULT 0
)
RETURNS SETOF evently.event_search_index AS $$
DECLARE
  query TEXT;
  param_count INT := 1;
BEGIN
  query := 'SELECT * FROM evently.event_search_index WHERE deleted_at IS NULL';

  IF search_term IS NOT NULL AND search_term <> '' THEN
    query := query || ' AND search_vector @@ to_tsquery(''english'', $' || param_count || ')';
    param_count := param_count + 1;
  END IF;

  IF category_id IS NOT NULL THEN
    query := query || ' AND category_id = $' || param_count;
    param_count := param_count + 1;
  END IF;

  query := query || ' ORDER BY ' || order_by;
  query := query || ' LIMIT ' || "limit";
  query := query || ' OFFSET ' || "offset";

  IF search_term IS NOT NULL AND search_term <> '' AND category_id IS NOT NULL THEN
    RETURN QUERY EXECUTE query USING search_term, category_id;
  ELSIF search_term IS NOT NULL AND search_term <> '' THEN
    RETURN QUERY EXECUTE query USING search_term;
  ELSIF category_id IS NOT NULL THEN
    RETURN QUERY EXECUTE query USING category_id;
  ELSE
    RETURN QUERY EXECUTE query;
  END IF;
END;
$$ LANGUAGE plpgsql;
COMMIT;