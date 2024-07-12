-- Deploy evently:add_roles_table to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE IF NOT EXISTS evently.roles (
  id SERIAL PRIMARY KEY,
  role VARCHAR(45) NOT NULL
);

COMMIT;
