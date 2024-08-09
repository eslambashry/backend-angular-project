import {model,Schema} from "mongoose";

const favoritSchema = new Schema({
    "userId": {
         type: Schema.Types.ObjectId,
        ref:'User',
        require:true
    },  
  "title": String,
  "description": String,
  "listings": [{
     type: Schema.Types.ObjectId,
        ref:'product',
        require:true
  }]  
}, {
    timestamps: true 
  }
)



export const favoritModel = model("User",favoritSchema)
