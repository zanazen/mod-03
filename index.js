import express from 'express'
import * as dotenv from 'dotenv'
import juizesRouter from './routes/juizes.routes.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use("/",juizesRouter)
app.listen(Number(process.env.PORT), () => console.log('server on port 8080!'))