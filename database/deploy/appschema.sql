-- Deploy evently:appschema to pg

BEGIN;

-- XXX Add DDLs here.
CREATE SCHEMA IF NOT EXISTS evently;

COMMIT;
