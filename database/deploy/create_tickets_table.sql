-- Deploy evently:create_tickets_table to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE IF NOT EXISTS evently.tickets (
  id SERIAL PRIMARY KEY,
  price DOUBLE PRECISION NOT NULL,
  quantity INT NOT NULL,
  events_id INT NOT NULL,
  ticket_types_id INT NOT NULL,
  created_at TIMESTAMPTZ NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NULL DEFAULT NOW(),
  FOREIGN KEY (events_id) REFERENCES evently.events(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (ticket_types_id) REFERENCES evently.ticket_types(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE INDEX fk_tickets_events1_idx ON evently.tickets (events_id);
CREATE INDEX fk_tickets_ticket_types1_idx ON evently.tickets (ticket_types_id);

COMMIT;
