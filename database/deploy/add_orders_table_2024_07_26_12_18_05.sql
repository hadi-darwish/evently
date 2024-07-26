-- Deploy evently:add_orders_table_2024_07_26_12_18_05 to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE IF NOT EXISTS evently.orders (
  id SERIAL PRIMARY KEY,
  event_id INT NOT NULL,
  user_id INT NOT NULL,
  total_amount NUMERIC(10, 2) NOT NULL,
  stripe_id VARCHAR(225) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ,
  FOREIGN KEY (event_id) REFERENCES evently.events (id),
  FOREIGN KEY (user_id) REFERENCES evently.users (id)
);

COMMIT;
