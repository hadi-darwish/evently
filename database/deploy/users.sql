-- Deploy evently:users to pg
-- requires: appschema

BEGIN;

SET client_min_messages = 'warning';

-- Create the type in the evently schema
DO $$
BEGIN
    CREATE TYPE evently.gender AS ENUM ('male', 'female');
EXCEPTION
    WHEN duplicate_object THEN null;
END
$$;

CREATE TABLE IF NOT EXISTS evently.users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone_number VARCHAR(45),
  address VARCHAR(255),
  city VARCHAR(45),
  gender evently.gender,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

COMMIT;