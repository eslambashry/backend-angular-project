import {model,Schema} from "mongoose";

const bookingSchema = new Schema({
    "productId": {
         type: Schema.Types.ObjectId,
        ref:'product',
        require:true
    }, 
    "guestId": {
        type: Schema.Types.ObjectId,
        ref:'User',
        require:true
    },  
    "checkInDate": Date,
    "checkOutDate": Date,
    "totalPrice": Number,
    "status": { type: String, enum: ["Confirmed", "Pending", "Cancelled"] },
    "createdAt": Date
}, {
    timestamps: true 
  }
)



export const bookingModel = model("Booking",bookingSchema)

