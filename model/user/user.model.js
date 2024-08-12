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
    Reviews: [
        {
          productId: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            required: true,
          },
          rating: {
            type: Number,
            required: true,
          },
          comment: {
            type: String,
            required: true,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      Bookings: [
        {
          bookingId: {
            type: Schema.Types.ObjectId,
            ref: 'Booking',
            required: true,
          },
          productId: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            required: true,
          },
          checkInDate: {
            type: Date,
            required: true,
          },
          checkOutDate: {
            type: Date,
            required: true,
          },
          status: {
            type: String,
            required: true,
          },
        },
      ],
      favoriteProperties: [
        {
          type: Schema.Types.ObjectId,
          ref: 'product',
        },
      ]},
      {
    timestamps: true 
  }
)



export const userModel = model("User",userSchema)




// Reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
// Bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
// const reviewSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   productId: { type: String, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
//   date: { type: Date, default: Date.now }
// });
// const bookingSchema = new Schema({
//   userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//   productId: { type: String, required: true },
//   checkInDate: { type: Date, required: true },
//   checkOutDate: { type: Date, required: true },
//   status: { type: String, required: true }
// });