-- Revert evently:users from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.users;
DROP TYPE IF EXISTS gender;

COMMIT;
