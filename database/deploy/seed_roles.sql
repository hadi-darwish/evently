-- Deploy evently:seed_roles to pg

BEGIN;

-- Insert roles if they do not already exist
INSERT INTO evently.roles (role)
SELECT 'admin'
WHERE NOT EXISTS (SELECT 1 FROM evently.roles WHERE role = 'admin');

INSERT INTO evently.roles (role)
SELECT 'organizer'
WHERE NOT EXISTS (SELECT 1 FROM evently.roles WHERE role = 'organizer');

INSERT INTO evently.roles (role)
SELECT 'attendee'
WHERE NOT EXISTS (SELECT 1 FROM evently.roles WHERE role = 'attendee');

COMMIT;