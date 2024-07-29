-- Deploy evently:alter_orders_table_add_attendee_id to pg

BEGIN;

-- Drop the foreign key constraint for user_id
ALTER TABLE evently.orders
DROP CONSTRAINT IF EXISTS orders_user_id_fkey;

-- Add the new attendee_id column
ALTER TABLE evently.orders
ADD COLUMN attendee_id INT NOT NULL;

-- Add the foreign key constraint for attendee_id
ALTER TABLE evently.orders
ADD CONSTRAINT fk_attendee
FOREIGN KEY (attendee_id) REFERENCES evently.attendees (id);

-- Drop the old user_id column
ALTER TABLE evently.orders
DROP COLUMN user_id;

COMMIT;