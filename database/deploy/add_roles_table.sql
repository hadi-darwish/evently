-- Deploy evently:add_roles_table to pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.roles;

CREATE TABLE evently.roles (
  id SERIAL PRIMARY KEY,
  role VARCHAR(45) NOT NULL
);

COMMIT;
