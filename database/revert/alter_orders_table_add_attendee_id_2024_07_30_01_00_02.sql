-- Revert evently:alter_orders_table_add_attendee_id to pg

BEGIN;

-- Add the old user_id column back
ALTER TABLE evently.orders
ADD COLUMN user_id INT NOT NULL;

-- Add the foreign key constraint for user_id
ALTER TABLE evently.orders
ADD CONSTRAINT fk_user
FOREIGN KEY (user_id) REFERENCES evently.users (id);

-- Drop the attendee_id column
ALTER TABLE evently.orders
DROP COLUMN attendee_id;

-- Drop the foreign key constraint for attendee_id
ALTER TABLE evently.orders
DROP CONSTRAINT IF EXISTS fk_attendee;

COMMIT;