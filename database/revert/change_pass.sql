-- Revert evently:change_pass from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS evently.change_pass(
    INTEGER,
    VARCHAR(255),
    VARCHAR(255)
);

COMMIT;
