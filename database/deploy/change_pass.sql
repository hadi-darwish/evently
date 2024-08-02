-- Deploy evently:change_pass to pg
-- requires: users
-- requires: appschema

BEGIN;

-- XXX Add DDLs here.
CREATE OR REPLACE FUNCTION evently.change_pass(
    _id INT,
    _old_password VARCHAR(255),
    _new_password VARCHAR(255)
) RETURNS BOOLEAN SECURITY DEFINER AS $$
    BEGIN
        UPDATE evently.users
            SET password = extensions.crypt(_new_password, extensions.gen_salt('bf'))
            WHERE id = _id
            AND password = extensions.crypt(_old_password, password);
        RETURN FOUND;
    END;
$$ LANGUAGE plpgsql;

COMMIT;
