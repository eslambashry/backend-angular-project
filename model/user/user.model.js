import {model,Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    phone:Number,
    Profile_Picture:String,
    verified:Boolean,
    bio:String,
    role:{ 
        type:String,
        enum:['Host','Guest'],
        default:'Guest'
    },
    // Reviews: 
    //   {
    //     type:String,
    //     reviewId: string,
    //     propertyId: string,
    //     rating: number,
    //     comment: string,
    //     date: string
    //   },
    // Bookings: {
    //       type:String,
    //       bookingId: string,
    //       propertyId: string,
    //       checkInDate: string,
    //       checkOutDate: string,
    //       status: string  

    // },
    //   favoriteProperties: String
}, {
    timestamps: true 
  }
)



export const userModel = model("User",userSchema)




// Reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
// Bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
// const reviewSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   propertyId: { type: String, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
//   date: { type: Date, default: Date.now }
// });
// const bookingSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   propertyId: { type: String, required: true },
//   checkInDate: { type: Date, required: true },
//   checkOutDate: { type: Date, required: true },
//   status: { type: String, required: true }
// });