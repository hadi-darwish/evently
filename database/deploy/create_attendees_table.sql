-- Deploy evently:create_attendees_table to pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.attendees;

CREATE TABLE evently.attendees (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NULL,
  last_name VARCHAR(255) NULL,
  date_of_birth DATE NULL,
  users_id INT NOT NULL,
  CONSTRAINT fk_attendees_users1 FOREIGN KEY (users_id)
    REFERENCES evently.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE INDEX fk_attendees_users1_idx ON evently.attendees (users_id);

COMMIT;
