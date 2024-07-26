-- Revert evently:make_name_unique_2024_07_26_12_40_14 from pg

BEGIN;

-- XXX Add DDLs here.
ALTER TABLE evently.categories
  DROP CONSTRAINT unique_name;

COMMIT;
