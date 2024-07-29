-- revert/add_soft_delete_function_and_triggers.sql

BEGIN;

-- Drop the soft delete functions
DROP FUNCTION IF EXISTS evently.soft_delete_user(INT);
DROP FUNCTION IF EXISTS evently.soft_delete_attendee(INT);
DROP FUNCTION IF EXISTS evently.soft_delete_organizer(INT);
DROP FUNCTION IF EXISTS evently.soft_delete_order(INT);
DROP FUNCTION IF EXISTS evently.soft_delete_event(INT);
DROP FUNCTION IF EXISTS evently.soft_delete_category(INT);

-- disable row-level security on each table
ALTER TABLE evently.users DISABLE ROW LEVEL SECURITY;
ALTER TABLE evently.attendees DISABLE ROW LEVEL SECURITY;
ALTER TABLE evently.organizers DISABLE ROW LEVEL SECURITY;
ALTER TABLE evently.orders DISABLE ROW LEVEL SECURITY;
ALTER TABLE evently.events DISABLE ROW LEVEL SECURITY;
ALTER TABLE evently.categories DISABLE ROW LEVEL SECURITY;

-- Drop the policies
DROP POLICY IF EXISTS soft_delete_users_policy ON evently.users;
DROP POLICY IF EXISTS soft_delete_attendees_policy ON evently.attendees;
DROP POLICY IF EXISTS soft_delete_organizers_policy ON evently.organizers;
DROP POLICY IF EXISTS soft_delete_orders_policy ON evently.orders;
DROP POLICY IF EXISTS soft_delete_events_policy ON evently.events;
DROP POLICY IF EXISTS soft_delete_categories_policy ON evently.categories;

COMMIT;