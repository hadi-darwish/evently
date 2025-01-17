import { postgraphile } from 'postgraphile'
import dotenv from 'dotenv'

dotenv.config()

const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT, DATABASE_SCHEMA } =
  process.env

const postgraphileMiddleware = postgraphile(
  {
    database: DATABASE,
    user: PG_USER,
    password: PASSWORD,
    host: HOST,
    port: PG_PORT ? parseInt(PG_PORT, 10) : undefined,
  },
  DATABASE_SCHEMA,
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  },
)

export default postgraphileMiddleware
