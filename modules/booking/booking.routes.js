import { Router } from "express";
import { createBooking, getAllBooking } from "./booking.controller.js";


const bookRouter = Router()


bookRouter.post('/bookings',createBooking)
bookRouter.get('/getAllBooking',getAllBooking)

export default bookRouter;