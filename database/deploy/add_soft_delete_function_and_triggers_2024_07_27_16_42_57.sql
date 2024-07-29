-- deploy/add_soft_delete_function_and_triggers.sql

BEGIN;

CREATE OR REPLACE FUNCTION evently.soft_delete_user(user_id INT)
RETURNS VOID AS $$
BEGIN
    UPDATE evently.users
    SET deleted_at = NOW()
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION evently.soft_delete_attendee(attendee_id INT)
RETURNS VOID AS $$
BEGIN
    UPDATE evently.attendees
    SET deleted_at = NOW()
    WHERE id = attendee_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION evently.soft_delete_organizer(organizer_id INT)
RETURNS VOID AS $$
BEGIN
    UPDATE evently.organizers
    SET deleted_at = NOW()
    WHERE id = organizer_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION evently.soft_delete_order(order_id INT)
RETURNS VOID AS $$
BEGIN
    UPDATE evently.orders
    SET deleted_at = NOW()
    WHERE id = order_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION evently.soft_delete_event(event_id INT)
RETURNS VOID AS $$
BEGIN
    UPDATE evently.events
    SET deleted_at = NOW()
    WHERE id = event_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION evently.soft_delete_category(category_id INT)
RETURNS VOID AS $$
BEGIN
    UPDATE evently.categories
    SET deleted_at = NOW()
    WHERE id = category_id;
END;
$$ LANGUAGE plpgsql;


-- Enable row-level security on each table
ALTER TABLE evently.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE evently.attendees ENABLE ROW LEVEL SECURITY;
ALTER TABLE evently.organizers ENABLE ROW LEVEL SECURITY;
ALTER TABLE evently.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE evently.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE evently.categories ENABLE ROW LEVEL SECURITY;

-- create a policy to prevent soft deleted rows from being selected
CREATE POLICY soft_delete_users_policy ON evently.users
FOR SELECT
USING (deleted_at IS NULL);

CREATE POLICY soft_delete_attendees_policy ON evently.attendees
FOR SELECT
USING (deleted_at IS NULL);

CREATE POLICY soft_delete_organizers_policy ON evently.organizers
FOR SELECT
USING (deleted_at IS NULL);

CREATE POLICY soft_delete_orders_policy ON evently.orders
FOR SELECT
USING (deleted_at IS NULL);

CREATE POLICY soft_delete_events_policy ON evently.events
FOR SELECT
USING (deleted_at IS NULL);

CREATE POLICY soft_delete_categories_policy ON evently.categories
FOR SELECT
USING (deleted_at IS NULL);


COMMIT;