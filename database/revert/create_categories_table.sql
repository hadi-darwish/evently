-- Revert evently:create_categories_table from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE IF EXISTS evently.categories;

COMMIT;
