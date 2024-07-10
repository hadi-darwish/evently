-- Revert evently:seed_roles from pg

BEGIN;

-- XXX Add DDLs here.
DELETE FROM evently.roles WHERE role IN ('admin', 'organizer', 'attendee');
COMMIT;
