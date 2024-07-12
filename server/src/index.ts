import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import postgraphileMiddleware from './postgraphile'

dotenv.config()

const app = express()
const { PORT } = process.env

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(postgraphileMiddleware)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
