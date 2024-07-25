-- Revert evently:login_function from pg

BEGIN;

DROP FUNCTION IF EXISTS evently.login_function(
    VARCHAR(255), VARCHAR(255)
) CASCADE;

COMMIT;