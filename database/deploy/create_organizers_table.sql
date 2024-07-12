-- Deploy evently:create_organizers_table to pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.organizers;

CREATE TABLE evently.organizers (
  id SERIAL PRIMARY KEY,
  org_name VARCHAR(255) NULL,
  users_id INT NOT NULL,
  CONSTRAINT fk_organizers_users1 FOREIGN KEY (users_id)
    REFERENCES evently.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE INDEX fk_organizers_users1_idx ON evently.organizers (users_id);

COMMIT;
