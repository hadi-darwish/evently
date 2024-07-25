-- Deploy evently:add_user_info_type to pg

BEGIN;

-- XXX Add DDLs here.
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_info') THEN
        CREATE TYPE evently.user_info AS (
            id INT,
            email VARCHAR(255),
            username VARCHAR(255),
            phone_number VARCHAR(45),
            address VARCHAR(255),
            city VARCHAR(45),
            gender evently.gender,
            role VARCHAR(50),
            organizer_info JSONB,
            attendee_info JSONB
        );
    END IF;
END $$;

COMMIT;
