import { Schema,model } from "mongoose"
import pkg from 'bcrypt'

const userSchema = new Schema({

    userName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isConfirmed:{
        type:Boolean,
        required:true,
        default:false,
    },
    role:{
        type:String,
        enum:['Guest','Host'],
        default:'Guest'
    },
    phoneNumber:{
        type:String,
    },
    address:[{
        type:String,
        required:true,
    }],
    profilePicture:{
        secure_url:String,
        public_id:String,
    },
    status:{
        type:String,
        default:'offline',
        enum:['offline','online'],
    },
    gender:{
        type:String,
        default:'not specified',
        enum:['male','female','not specified']
    },
    age:Number,
    token:String,
    forgetCode:String,
},{timestamps:true})


export const userModel = model('user', userSchema)

