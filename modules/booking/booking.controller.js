import { bookingModel } from "../../model/booking/booking.model.js";


export const createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
    
        const newBooking = new bookingModel({
          productId: bookingData.productId,
          guestId: bookingData.guestId,
          guestName: bookingData.guestName,
          guestEmail: bookingData.guestEmail,
          checkInDate: bookingData.checkInDate,
          checkOutDate: bookingData.checkOutDate,
          totalPrice: bookingData.totalPrice,
          status: bookingData.status,
          createdAt: new Date() // Use the current date and time
        });
    
        // Save the booking to the database
        const savedBooking = await newBooking.save();
    
        // Respond with the created booking
        res.status(201).json("Booking Done Successfully",savedBooking);
      } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }

    }
    
    export const getAllBooking = async(req,res) => {
      const bookings = await bookingModel.find()

      res.status(201).json({message:"Bookings",bookings})
    }

