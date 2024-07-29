import express from 'express'
import bodyParser from 'body-parser'
const app = express()
import loginRoutes from './routes/loginRoutes.js'

app.use(bodyParser.json())
app.use('/api/auth', loginRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))