import express from 'express'
import bcrypt from 'bcryptjs'
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()
const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.GRAPHQL_ENDPOINT || 'http://localhost:5000/graphql',
    fetch: fetch, // Use the built-in fetch
  }),
  cache: new InMemoryCache(),
})

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const query = gql`
    query GetUser($username: String!) {
      userByUsername(username: $username) {
        id
        username
        password
      }
    }
  `
  const variables = { username }
  try {
    const { data } = await client.query({ query, variables })
    const user = data.userByUsername
    if (!user) {
      return res.status(400).send('Invalid username or password')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).send('Invalid username or password')
    }
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      },
    )
    res.status(200).json({ token })
  } catch (err) {
    res.status(500).send('Error logging in')
  }
})

export default router
