import {userModel}  from "../../model/user/user.model.js";
import { sendEmailService } from "../../services/sendEmailServecies.js"
import { emailTemplate } from "../../utilities/emailTemplate.js"
import {generateToken} from "../../utilities/tokenFunctions.js"
import jwt from 'jsonwebtoken';



export const register = async(req,res,next) => {
  const { 
      userName,
      email,
      password,
      confirmPassword,
      age,
      gender,
      phoneNumber,
      address,
  } = req.body
  //is email exsisted
  const isExsisted = await userModel.findOne({email})
  if(isExsisted){
      return res.status(400).json({message:"Email already exsisted"})
  }
const token = generateToken({
  payload:{
      email,
  },
  signature: "stitch",
  expiresIn: '1h',
})
  const confirmationLink = `${req.protocol}://${req.headers.host}/auth/confirm/${token}`
  const isEmailSent = sendEmailService({
      to:email,
      subject:'Confirmation Email',
       message: //`<a href=${confirmationLink}> Click here to confirm </a>`
       emailTemplate({
          link: confirmationLink,
          linkData: 'Click here to confirm',
          subject: 'Confirmation Email',
       })
       ,
  }) 
  if(!isEmailSent){
      return res.status(400).json({message:'fail to sent confirmation email'})
  }
  const user = new userModel({
      userName,
      email,
      password,
      confirmPassword,
      age, 
      gender,
      phoneNumber,
      address,
  })
  const saveUser = await user.save()
  res.status(201).json({message:'done', saveUser})
}
import pkg from 'bcrypt'
export const login = async(req,res,next) => {
    const {email,password} = req.body


    const userExsist = await userModel.findOne({email})
    if(!userExsist){
        return res.status(400).json({message: "in correct email"})
    }

    
    const passwordExsist = pkg.compareSync(password,userExsist.password)
    if(!passwordExsist){
        return res.status(400).json({message: "in correct password"})
    }
    const token = jwt.sign(
        {
          email,
          _id: userExsist._id,
          role: userExsist.role,
        },
        'stitch',
        { expiresIn: '1h' }
      );

     const userUpdated = await userModel.findOneAndUpdate(
        
        {email},
        
        {
            token,
            status: 'online'
        },
        {new: true},
     )
     res.status(200).json({message: 'Login Success', userUpdated})
}



  export const getAllUsers = async (req, res) => {
    try {
        let users = await userModel.find()
            .populate({
                path: 'Bookings.bookingId',
                model: 'Booking', // Use the correct model name for Booking
            })
            .populate({
                path: 'Bookings.productId',
                model: 'product', // Use the correct model name for Product
            });

        res.status(200).json({ message: "Done", users });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error });
    }
};
