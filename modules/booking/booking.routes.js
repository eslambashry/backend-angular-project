import { Router } from "express";
import { createBooking } from "./booking.controller.js";


const bookRouter = Router()


bookRouter.post('/bookings',createBooking)


export default bookRouter;