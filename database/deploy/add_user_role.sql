-- Deploy evently:add_user_role to pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE evently.users ADD COLUMN role_id INT;
ALTER TABLE evently.users ADD CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES evently.roles (id);

COMMIT;
