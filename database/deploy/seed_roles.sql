-- Deploy evently:seed_roles to pg

BEGIN;

-- XXX Add DDLs here.
INSERT INTO evently.roles (role) VALUES ('admin');
INSERT INTO evently.roles (role) VALUES ('organizer');
INSERT INTO evently.roles (role) VALUES ('attendee');

COMMIT;
