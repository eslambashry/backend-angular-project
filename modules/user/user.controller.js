import {userModel}  from "../../model/user/user.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// const saltRounds = 10;
const secretKey = 'koshary'; 



export const register = async (userData) => {
    const { name, email, password, phone, role } = userData;

    // const userExsist = await userModel.findOne(email)
    // if(userExsist){
    //    throw new Error('Email Is Already Exsist');
    // }

    // console.log("Form Data",userData);
    
  // console.log("name",name);
  // console.log("email",email);
  // console.log("password",password);
  // console.log("phone",phone);
  // console.log("role",role);
  

    const hashedpassword = await bcrypt.hash(password, 8);
  
    const newUser = new userModel({
      name,
      email,
      password: hashedpassword,
      phone,
      role
    });
  
    return newUser.save();
  };
  
  export const login = async (credentials) => {
    const { email, password } = credentials;
  
    const user = await userModel.findOne({ email });
    if (!user) throw new Error('User not found');
  
    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid password');
  
    const token = jwt.sign({ id: user._id, email: user.email ,role: user.role, name:user.name}, secretKey, {
      expiresIn: '1h'
    });
  
    return { token };
  };


export const getAllUSer = async (req, res) => {
    let users = await userModel.find()
    res.status(201).json({ message: "Done", users })
}

// export const signIn = async(req,res) =>{
//     const { email, password } = req.body;

//     const emailExsited = await userModel.findOne({email})
//     const passwordExsited = await userModel.findOne({password})

//     if(!emailExsited){
//     return res.status(400).json({ message: "InCorrect email" })
//     }

//     if(!passwordExsited){
//     return res.status(400).json({ message: "InCorrect password" })
//     }

//     res.status(201).json({message:"Login Successfuly"})
// }


// export const updateUser = async(req,res) => {
//     const {id} = req.params;
//     const updateData = req.body

//     const exsited = await userModel.findByIdAndUpdate(id,updateData,{new:true})

//     if(exsited){
//         res.status(201).json({message:"User Updated",exsited})
//     }

//     else{
//         res.status(404).json({message:"User Not Found"})
//     }
// }

// export const deleteUser = async(req,res) => {

//         const {id}  = req.params;
//         const exsited = await userModel.findByIdAndDelete(id)

//         res.status(201).json({message:"User Deleted Successfuly",exsited})

//     }

// export const findUserById = async(req,res)=>{
//     const {id} = req.params

//     const exsisted = await userModel.findById(id)

//     if(exsisted){
//         res.status(201).json({message:"User Found Successfully",exsisted})
//     }
//     else{
//         res.status(404).json({message:"User Not Found"})

//     }
// }


// export const findUsersByFirstLetterAndAge = async(req,res)=>{
//     const { firstLetter, minAge, maxAge } = req.body;

//         const filteredUsers = await userModel.find({
//             username: { $regex: `^${firstLetter}`, $options: 'i' },
//             age: { $gte: minAge, $lte: maxAge }
//         });

//         if (filteredUsers.length == 0) {
//             res.status(404).json({ message: "No Users Found" });
//         } else {
//             res.status(200).json({ message: "Users Found Successfully", filteredUsers });
//         }
// }



