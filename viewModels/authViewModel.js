import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { getUserByUsername, createUser } from '../models/authModel.js'

export const loginViewModel = async (username, password) => {
  try {
    const user = await getUserByUsername(username)
    if (!user) return { responseCode: 400, responseMessage: 'Invalid credentials', data: null, token: null }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return { responseCode: 400, responseMessage: 'Invalid credentials', data: null, token: null }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

    const data = {
      name: user.name,
      username: user.username,
      address: user.address
    }

    return { responseCode: 200, responseMessage: 'Login successful', data, token:`Bearer ${token}`}
  } catch (err) {
    console.error(err)
    return { responseCode: 500, responseMessage: 'Server Error', data: null, token: null }
  }
}

export const registerViewModel = async (username, password, name, address) => {
  try {
    const existingUser = await getUserByUsername(username)

    if (existingUser) return { responseCode: 400, responseMessage: 'Username already exists', data: null }

    const hashedPassword = await bcrypt.hash(password, 10)
    await createUser(username, hashedPassword, name, address)

    const data = {
      name,
      username,
      address
    }

    return { responseCode: 201, responseMessage: 'User registered successfully', data }
  } catch (err) {
    console.error(err)
    return { responseCode: 500, responseMessage: 'Server Error', data: null }
  }
}
