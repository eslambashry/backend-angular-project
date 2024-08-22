
import express from "express"
import userRouter from "./modules/user/user.routes.js"
import productRouter from "./modules/product/product.routes.js"
import cors from 'cors'
import { connectedDB } from "./model/connection/connection.js"
import bookRouter from "./modules/booking/booking.routes.js"

const app = express()
const port = 3001

 
app.use(cors())
 
app.use(express.json())
connectedDB

app.use(bookRouter)
app.use(userRouter)
app.use(productRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))