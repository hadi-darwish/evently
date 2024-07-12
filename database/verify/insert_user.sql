-- Verify evently:insert_user on pg

BEGIN;

-- XXX Add verifications here.
SELECT has_function_privilege('evently.insert_user(
        VARCHAR(255),
        VARCHAR(255),
        VARCHAR(255),
        VARCHAR(45),
        VARCHAR(255),
        VARCHAR(45),
        gender
    )','execute');

ROLLBACK;
