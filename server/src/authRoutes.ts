// src/authRoutes.ts
import express from 'express'
import bcrypt from 'bcryptjs'
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT,
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
})

// Middleware to hash passwords
const hashPassword = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(req.body.password, salt)
    next()
  } catch (err) {
    res.status(500).send('Error hashing password')
  }
}

// Register Organizer
router.post('/register/organizer', hashPassword, async (req, res) => {
  const { username, password, email, phone_number, address, city, gender } =
    req.body
  const mutation = gql`
    mutation RegisterOrganizer($input: CreateUserInput!) {
      createUser(input: $input) {
        user {
          id
          username
          email
        }
      }
    }
  `
  const variables = {
    input: {
      user: {
        username,
        password,
        email,
        phone_number,
        address,
        city,
        gender,
        role: 'organizer',
      },
    },
  }
  try {
    const { data } = await client.mutate({ mutation, variables })
    res.status(201).json(data.createUser.user)
  } catch (err) {
    res.status(500).send('Error registering organizer')
  }
})

// Register Attendee
router.post('/register/attendee', hashPassword, async (req, res) => {
  const { username, password, email, phone_number, address, city, gender } =
    req.body
  const mutation = gql`
    mutation RegisterAttendee($input: CreateUserInput!) {
      createUser(input: $input) {
        user {
          id
          username
          email
        }
      }
    }
  `
  const variables = {
    input: {
      user: {
        username,
        password,
        email,
        phone_number,
        address,
        city,
        gender,
        role: 'attendee',
      },
    },
  }
  try {
    const { data } = await client.mutate({ mutation, variables })
    res.status(201).json(data.createUser.user)
  } catch (err) {
    res.status(500).send('Error registering attendee')
  }
})

export default router
