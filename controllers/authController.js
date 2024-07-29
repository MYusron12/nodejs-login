import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { loginViewModel, registerViewModel } from '../viewModels/authViewModel.js'

dotenv.config()

export const login = async (req, res) => {
  const { username, password } = req.body
  const response = await loginViewModel(username, password)
  res.status(response.responseCode).json(response)
}

export const register = async (req, res) => {
  const { username, password, name, address } = req.body
  const response = await registerViewModel(username, password, name, address)
  res.status(response.responseCode).json(response)
}

export const verifyToken = (req, res) => {
  const { token } = req.body
  if (!token) return res.status(400).json({ message: 'Token is required' })
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, user: decoded })
  } catch (error) {
    res.status(401).json({ valid: false, message: 'Invalid token' })
  }
}
