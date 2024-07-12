-- Deploy evently:create_registrations_table to pg

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE IF NOT EXISTS evently.registrations (
  id SERIAL PRIMARY KEY,
  quantity INT NOT NULL,
  attendees_id INT NOT NULL,
  tickets_id INT NOT NULL,
  events_id INT NOT NULL,
  registration_date TIMESTAMPTZ NOT NULL,
  FOREIGN KEY (attendees_id) REFERENCES evently.attendees(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (tickets_id) REFERENCES evently.tickets(id) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (events_id) REFERENCES evently.events(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE INDEX fk_registrations_attendees1_idx ON evently.registrations (attendees_id);
CREATE INDEX fk_registrations_tickets1_idx ON evently.registrations (tickets_id);
CREATE INDEX fk_registrations_events1_idx ON evently.registrations (events_id);

COMMIT;
