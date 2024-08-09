import {Schema,model} from "mongoose";

const productsSchema = new Schema (
    {
      // hostId: {
      //   type: Schema.Types.ObjectId,
      //   ref:'User',
      //   require:true
      // },
        title: {
          type: String        },
        description: {
          type: String,
          required: false
        },
        price: {
          type: Number,
          required: false
        },
        location: {
          address: {
            type: String,
            required: false
          },
          city: {
            type: String,
            required: false
          },
          state: {
            type: String,
            required: false
          },
          country: {
            type: String,
            required: false
          },
          zipCode: {
            type: String,
            required: false
          }
        },
        owner: {
          id: {
            type: Schema.Types.ObjectId,
            ref:"User",
            required: false
          },
          name: {
            type: String,
            required: false
          },
          email: {
            type: String,
            required: false
          }
        },
        amenities: [String],
        photos: [
          {
            url: {
              type: String,
              required: false
            },
            caption: {
              type: String,
              required: false
            }
          }
        ],
        reviews: [
          {
            reviewId: {
              type: Schema.Types.ObjectId,
              required: false
            },
            userId: {
              type: Schema.Types.ObjectId,
              // ref:"User",
              required: false
            },
            rating: {
              type: Number,
              required: false
            },
            comment: {
              type: String,
              required: false
            },
            date: {
              type: Date,
              default: Date.now
            }
          }
        ],
        rating: Number,
        bookingDetails: {
          checkInDate: {
            type: Date,
            required: false
          },
          checkOutDate: {
            type: Date,
            required: false
          },
          availableDates: [Date]
        },
        type: {
          type: String,
          enum: ['Entire home', 'Private room', 'Shared room'],
          required: false
        }
      }
  ,{timestamps:true,versionKey:false})

export const productModel = model("product",productsSchema)




