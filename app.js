
import express from "express"
import hotelRouter from "./modules/hotel/hotel.routes.js"
import { connectedDB } from "./model/connection/connection.js"
import bookRouter from "./modules/booking/booking.routes.js"
import userRoutes from "./modules/user/user.routes.js"
import cors from 'cors'
 

import path from 'path'
import { config } from 'dotenv'
config({path: path.resolve('./config/.env')})


const app = express()
const port = process.env.PORT

    // Configure CORS to allow requests from your frontend origin
    app.use(cors({
        // origin: ['http://localhost:3000','http://localhost:3001','http://localhost:3002','http://localhost:3003'], // Allow requests from this origin
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
        credentials: true, // Allow cookies and credentials
    }));


app.get('/', (req, res) => res.send('Backend is running ✔️')); 
app.use(cors())
app.use(express.json());
 
  
connectedDB()

app.use(bookRouter)
app.use(userRoutes)
app.use(hotelRouter)



app.listen(port, () => console.log(`Example app listening on port ${port} 🤟`))

