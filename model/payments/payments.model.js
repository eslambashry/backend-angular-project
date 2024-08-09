import {model,Schema} from "mongoose";

const PaymentsgSchema = new Schema({
    "BookingId": {
        type: Schema.Types.ObjectId,
        ref:'Booking',
        require:true
    },
    "amount": Number,
    "paymentMethod": { type: String, enum: ["Credit Card", "PayPal"] },
    "paymentStatus": { type: String, enum: ["Completed", "Pending"] },
    "transactionId": String,
    "createdAt": Date
}, {
    timestamps: true 
  }
)



export const PaymentsModel = model("Payments",PaymentsgSchema)

