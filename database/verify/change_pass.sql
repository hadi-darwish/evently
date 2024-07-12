-- Verify evently:change_pass on pg

BEGIN;

-- XXX Add verifications here.
SELECT has_function_privilege('evently.change_pass(
    INTEGER,
    VARCHAR(255),
    VARCHAR(255)
)', 'execute');

ROLLBACK;
