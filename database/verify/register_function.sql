-- Verify evently:register_function on pg

BEGIN;

-- XXX Add verifications here.
SELECT routine_name, routine_type
FROM information_schema.routines
WHERE
    routine_name = 'register_function' AND
    routine_type = 'FUNCTION';

ROLLBACK;
