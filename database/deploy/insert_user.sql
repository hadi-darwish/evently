-- Deploy evently:insert_user to pg
-- requires: users
-- requires: appschema

BEGIN;

-- XXX Add DDLs here.
CREATE OR REPLACE FUNCTION evently.insert_user(
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    phone_number VARCHAR(45),
    address VARCHAR(255),
    city VARCHAR(45),
    gender gender
) RETURNS VOID LANGUAGE SQL SECURITY DEFINER AS $$
        INSERT INTO evently.users (username, password, email, phone_number, address, city, gender)
        VALUES ($1, crypt($2, gen_salt('bf')), $3, $4, $5, $6, $7);
    $$;

COMMIT;
