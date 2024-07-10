-- Verify evently:seed_roles on pg

BEGIN;

-- XXX Add verifications here.
SELECT * FROM evently.roles WHERE role IN ('admin', 'organizer', 'attendee');

ROLLBACK;
