-- deploy/organizer_by_users_id_2024_07_26_21_38_09.sql
BEGIN;

CREATE OR REPLACE FUNCTION evently.organizerByUsersId(p_users_id INT)
RETURNS TABLE (
    id INT,
    org_name VARCHAR(255),
    users_id INT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        o.id,
        o.org_name,
        o.users_id
    FROM
        evently.organizers o
    WHERE
        o.users_id = p_users_id;
END;
$$ LANGUAGE plpgsql;

COMMIT;