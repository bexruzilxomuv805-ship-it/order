import express from 'express'
import logger from './middlewares/logger'
import 'dotenv/config'
import orderRoutes from './routes/order.routes'
import { connectDB } from './db/db'

const app = express()
app.use(express.json())
app.use(logger.log)
await connectDB()

app.use('/orders', orderRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is working...')
})
