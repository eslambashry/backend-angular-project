import { model, Schema } from "mongoose";

const bookingSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    guestId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    guestName: { type: String, required: true },
    guestEmail: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true
}
)



export const bookingModel = model("Booking", bookingSchema)

