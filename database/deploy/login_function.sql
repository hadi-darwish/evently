-- Deploy evently:login_function to pg

BEGIN;

CREATE OR REPLACE FUNCTION evently.login_function(
    _email VARCHAR(255),
    _password VARCHAR(255)
) RETURNS evently.user_info AS $$
    DECLARE
        _user_id INT;
        _stored_password VARCHAR(255);
        _role_id INT;
        _organizer_info JSONB;
        _attendee_info JSONB;
        _user_info evently.user_info;
    BEGIN
        -- Check if email exists
        SELECT id, password, role_id INTO _user_id, _stored_password, _role_id
        FROM evently.users
        WHERE email = _email;

        IF NOT FOUND THEN
            RETURN NULL;
        END IF;

        -- Verify password
        IF _stored_password = extensions.crypt(_password, _stored_password) THEN
            -- Fetch related organizer or attendee information
            IF _role_id = 2 THEN
                SELECT row_to_json(o) INTO _organizer_info
                FROM evently.organizers o
                WHERE o.users_id = _user_id;
            ELSIF _role_id = 3 THEN
                SELECT row_to_json(a) INTO _attendee_info
                FROM evently.attendees a
                WHERE a.users_id = _user_id;
            END IF;

            -- Construct the user_info composite type
            _user_info := (SELECT (u.id, u.email, u.username, u.phone_number, u.address, u.city, u.gender, 
                                   CASE
                                       WHEN u.role_id = 2 THEN 'organizer'
                                       WHEN u.role_id = 3 THEN 'attendee'
                                       ELSE 'unknown'
                                   END,
                                   _organizer_info, _attendee_info)::evently.user_info
                           FROM evently.users u
                           WHERE u.id = _user_id);

            RETURN _user_info;
        ELSE
            RETURN NULL;
        END IF;
    END;
$$ LANGUAGE plpgsql;

COMMIT;