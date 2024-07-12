-- Deploy evently:create_events_table to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE IF NOT EXISTS evently.events (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  location VARCHAR(255),
  date DATE,
  time TIME,
  categories_id INT NOT NULL,
  organizers_id INT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  FOREIGN KEY (categories_id) REFERENCES evently.categories(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (organizers_id) REFERENCES evently.organizers(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE INDEX fk_events_categories1_idx ON evently.events (categories_id);
CREATE INDEX fk_events_organizers1_idx ON evently.events (organizers_id);

COMMIT;
