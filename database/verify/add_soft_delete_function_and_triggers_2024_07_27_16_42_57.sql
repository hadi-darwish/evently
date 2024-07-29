-- verify/add_soft_delete_function_and_triggers.sql

BEGIN;

-- Verify the soft delete functions exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_proc
        WHERE proname = 'soft_delete_user'
        AND pronamespace = (
            SELECT oid
            FROM pg_namespace
            WHERE nspname = 'evently'
        )
    ) THEN
        RAISE EXCEPTION 'Function evently.soft_delete_user does not exist';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_proc
        WHERE proname = 'soft_delete_attendee'
        AND pronamespace = (
            SELECT oid
            FROM pg_namespace
            WHERE nspname = 'evently'
        )
    ) THEN
        RAISE EXCEPTION 'Function evently.soft_delete_attendee does not exist';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_proc
        WHERE proname = 'soft_delete_organizer'
        AND pronamespace = (
            SELECT oid
            FROM pg_namespace
            WHERE nspname = 'evently'
        )
    ) THEN
        RAISE EXCEPTION 'Function evently.soft_delete_organizer does not exist';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_proc
        WHERE proname = 'soft_delete_order'
        AND pronamespace = (
            SELECT oid
            FROM pg_namespace
            WHERE nspname = 'evently'
        )
    ) THEN
        RAISE EXCEPTION 'Function evently.soft_delete_order does not exist';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_proc
        WHERE proname = 'soft_delete_event'
        AND pronamespace = (
            SELECT oid
            FROM pg_namespace
            WHERE nspname = 'evently'
        )
    ) THEN
        RAISE EXCEPTION 'Function evently.soft_delete_event does not exist';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_proc
        WHERE proname = 'soft_delete_category'
        AND pronamespace = (
            SELECT oid
            FROM pg_namespace
            WHERE nspname = 'evently'
        )
    ) THEN
        RAISE EXCEPTION 'Function evently.soft_delete_category does not exist';
    END IF;
END $$;

-- Verify the policies exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE policyname = 'soft_delete_users_policy'
        AND schemaname = 'evently'
        AND tablename = 'users'
    ) THEN
        RAISE EXCEPTION 'Policy soft_delete_users_policy does not exist on evently.users';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE policyname = 'soft_delete_attendees_policy'
        AND schemaname = 'evently'
        AND tablename = 'attendees'
    ) THEN
        RAISE EXCEPTION 'Policy soft_delete_attendees_policy does not exist on evently.attendees';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE policyname = 'soft_delete_organizers_policy'
        AND schemaname = 'evently'
        AND tablename = 'organizers'
    ) THEN
        RAISE EXCEPTION 'Policy soft_delete_organizers_policy does not exist on evently.organizers';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE policyname = 'soft_delete_orders_policy'
        AND schemaname = 'evently'
        AND tablename = 'orders'
    ) THEN
        RAISE EXCEPTION 'Policy soft_delete_orders_policy does not exist on evently.orders';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE policyname = 'soft_delete_events_policy'
        AND schemaname = 'evently'
        AND tablename = 'events'
    ) THEN
        RAISE EXCEPTION 'Policy soft_delete_events_policy does not exist on evently.events';
    END IF;

    IF NOT EXISTS (
        SELECT 1
        FROM pg_policies
        WHERE policyname = 'soft_delete_categories_policy'
        AND schemaname = 'evently'
        AND tablename = 'categories'
    ) THEN
        RAISE EXCEPTION 'Policy soft_delete_categories_policy does not exist on evently.categories';
    END IF;
END $$;

COMMIT;