-- Deploy evently:make_name_unique_2024_07_26_12_40_14 to pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE evently.categories
  ADD CONSTRAINT unique_name UNIQUE (name);

COMMIT;
