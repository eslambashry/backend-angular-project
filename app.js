
import express from "express"
import hotelRouter from "./modules/hotel/hotel.routes.js"
import { connectedDB } from "./model/connection/connection.js"
import bookRouter from "./modules/booking/booking.routes.js"
import userRoutes from "./modules/user/user.routes.js"
 

import path from 'path'
import { config } from 'dotenv'
config({path: path.resolve('./config/.env')})

import cors from 'cors'

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json());
  
  
connectedDB()

app.use(bookRouter)
app.use(userRoutes)
app.use(hotelRouter)



app.listen(port, () => console.log(`Example app listening on port ${port} 🤟`))

