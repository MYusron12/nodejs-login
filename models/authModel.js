import db from '../helpers/service.js'

export const getUserByUsername = async (username) =>
    (await db.execute('SELECT * FROM users WHERE username = ?', [username]))[0][0]

export const createUser = async (username, hashedPassword, name, address) =>
    await db.execute('INSERT INTO users (username, password, name, address, created_at, created_by) VALUES (?, ?, ?, ?, NOW(), ?)', [username, hashedPassword, name, address, 'admin'])
