import {model,Schema} from "mongoose";

const reviewsSchema = new Schema({

    "productId":{
        type: Schema.Types.ObjectId,
        ref:'product',
        require:true
    },  
    "userId":{
        type: Schema.Types.ObjectId,
        ref:'User',
        require:true
    },  
    "rating": { type: Number, min: 1, max: 5 },
    "comment": String,
    "createdAt": Date

}, {
    timestamps: true 
  }
)



export const ReviewsModel = model("Reviews",reviewsSchema)


