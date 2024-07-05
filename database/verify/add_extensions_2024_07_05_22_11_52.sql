-- Verify evently:add_extensions_2024_07_05_22_11_52 on pg

BEGIN;

-- XXX Add verifications here.
-- Verify plpgsql extension

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'plpgsql') THEN
        RAISE EXCEPTION 'plpgsql extension not found';
    END IF;
END
$$;

-- Verify pgcrypto extension

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pgcrypto') THEN
        RAISE EXCEPTION 'pgcrypto extension not found';
    END IF;
END
$$;

ROLLBACK;
