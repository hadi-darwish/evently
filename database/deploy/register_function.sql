-- Deploy evently:register_function to pg

BEGIN;

CREATE OR REPLACE FUNCTION evently.register_function(
    _email VARCHAR(255),
    _password VARCHAR(255),
    _role VARCHAR(255),
    _phone_number VARCHAR(45),
    _address VARCHAR(255),
    _city VARCHAR(45),
    _gender evently.gender,
    _first_name VARCHAR(255) DEFAULT NULL,
    _last_name VARCHAR(255) DEFAULT NULL,
    _date_of_birth DATE DEFAULT NULL,
    _organization_name VARCHAR(255) DEFAULT NULL
) RETURNS BOOLEAN SECURITY DEFINER AS $$
    DECLARE
        _user_id INT;
        _username VARCHAR(255);
        _base_username VARCHAR(255);
        _suffix INT := 1;
        _role_id INT;
    BEGIN
        -- Check if email already exists
        IF EXISTS (SELECT 1 FROM evently.users WHERE email = _email) THEN
            RAISE EXCEPTION 'Email % already exists', _email;
        END IF;

        -- Generate base username from email
        _base_username := split_part(_email, '@', 1);
        _username := _base_username;

        -- Ensure the username is unique
        WHILE EXISTS (SELECT 1 FROM evently.users WHERE username = _username) LOOP
            _username := _base_username || _suffix;
            _suffix := _suffix + 1;
        END LOOP;

        -- Determine role_id based on role
        IF _role = 'user' THEN
            _role_id := 3;
        ELSIF _role = 'organizer' THEN
            _role_id := 2;
        ELSE
            RAISE EXCEPTION 'Invalid role: %', _role;
        END IF;

        INSERT INTO evently.users (
            username, email, password, phone_number, address, city, gender, role_id
        ) VALUES (
            _username, _email, crypt(_password, gen_salt('bf')), _phone_number, _address, _city, _gender, _role_id
        ) RETURNING id INTO _user_id;

        -- Insert into attendee table if role is user
        IF _role = 'user' THEN
            IF _first_name IS NULL OR _last_name IS NULL OR _date_of_birth IS NULL THEN
                RAISE EXCEPTION 'First name, last name, and date of birth are required for users';
            END IF;
            INSERT INTO evently.attendees (users_id, first_name, last_name, date_of_birth) VALUES (_user_id, _first_name, _last_name, _date_of_birth);
        END IF;

        -- Insert into organization table if role is organizer
        IF _role = 'organizer' THEN
            IF _organization_name IS NULL THEN
                RAISE EXCEPTION 'Organization name is required for organizers';
            END IF;
            INSERT INTO evently.organizers (org_name, users_id) VALUES (_organization_name, _user_id);
        END IF;

        RETURN TRUE;
    END;
$$ LANGUAGE plpgsql;

COMMIT;