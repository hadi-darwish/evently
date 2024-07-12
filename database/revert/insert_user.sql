-- Revert evently:insert_user from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS evently.insert_user(
    VARCHAR(255),
    VARCHAR(255),
    VARCHAR(255),
    VARCHAR(45),
    VARCHAR(255),
    VARCHAR(45),
    gender
);

COMMIT;
