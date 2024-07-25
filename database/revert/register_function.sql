-- Revert evently:register_function from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS evently.register_function(
    VARCHAR(255), VARCHAR(255), VARCHAR(255), VARCHAR(45), VARCHAR(255), VARCHAR(45), evently.gender, VARCHAR(255), VARCHAR(255), DATE, VARCHAR(255)
) CASCADE;

COMMIT;
