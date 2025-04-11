import { hotelModel } from "../../model/hotel/hotel.model.js"
import { customAlphabet } from 'nanoid'
import imagekit from '../../utilities/imagekitConfigration.js';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 5)

export const getproducts = async (req, res,next) => {
    let products = await hotelModel.find()

    if (products) {
        res.status(201).json({ message: "Done", products })
    }
    else {
        res.status(404).json({ message: "Didnt Find products" })

    }
}



export const addNewProduct = async (req, res) => {
    try {
        const { 
            title, description, price, location, 
            ownerId, ownerName, ownerEmail, 
            amenities, reviews, rating, 
            bookingDetails, type 
        } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'Please provide a hotel image' });
        }
        console.log(req.body.owner);
        console.log(req.body);
        console.log(location.address
            ,location.city
            ,location.country
            ,location.zipCode);
        
        // console.log(req.file);
        
        const customId = nanoid();
        const uploadResult = await imagekit.upload({
            file: req.file.buffer, // Uploading from buffer
            fileName: req.file.originalname,
            folder: `${process.env.PROJECT_FOLDER}/Hotel/${customId}`,
        });

        if (!uploadResult || !uploadResult.url) {
            return res.status(500).json({ message: 'Image upload failed. Please try again.' });
        }

        // Create new product
        const newProduct = new hotelModel({
            title,
            description,
            price,
            location: typeof location === 'string' ? JSON.parse(location) : location,
            owner: {
              id: ownerId,
              name: ownerName,
              email: ownerEmail,
            },
            amenities: typeof amenities === 'string' ? JSON.parse(amenities) : amenities,
            photos: {
              secure_url: uploadResult.url,
              public_id: uploadResult.fileId,
            },
            reviews: typeof reviews === 'string' ? JSON.parse(reviews) : reviews,
            rating,
            bookingDetails: typeof bookingDetails === 'string' ? JSON.parse(bookingDetails) : bookingDetails,
            type,
          });
          

        const savedProduct = await newProduct.save();

        if (!savedProduct) {
            await imagekit.deleteFile(uploadResult.fileId); // Rollback image upload if save fails
            return res.status(400).json({ message: 'Product not added' });
        }

        res.status(201).json({ message: 'Hotel added successfully', savedProduct });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ message: 'Server error', error });
    }
};


  

export const getProductById = async(req,res,next) => {

    const {id}= req.params

    const productExsist = await hotelModel.findById(id)

    if(productExsist){
        res.status(201).json({message:"Done",productExsist})
    }
    else{
        res.status(404).json({message:"product not found"})
    }
}

/////////

// export const deletePost = async (req, res) => {
//     let id = req.body;
//     let { userId } = req.params;
//     let userPost = await postModel.findById(id)
//     let postCreator = userPost.userId.toString()

//     // console.log(id);
//     // console.log(userId);
//     // console.log(userPost);
//     // console.log(postCreator);


//     if (postCreator == userId) {

//         let exsisted = await postModel.findByIdAndDelete(id)

//         if (exsisted) {
//             res.status(201).json({ message: "Post Deleted Successfully", exsisted })
//         }
//         else {
//             res.status(404).json({ message: "Didnt Find Posts" })
//         }
//     }
//     else {
//         res.status(404).json({ message: "This post Isn't your's" })

//     }

// }

// export const updatePost = async(req,res) => {
//     let post = req.body;
//     let postId = req.body.id;
//     let { id } = req.params;
//     let userPost = await postModel.findById(postId)
//     let postCreator = userPost.userId.toString()
    
    
// //     console.log(post);
// //     console.log(id);
// //     console.log(userPost);
// //     console.log(postId);
// //     console.log(postCreator);
// // console.log("++++++++++++++");
// // console.log(postCreator);
// // console.log(id);

//     if (postCreator == id) {
//         let exsisted = await postModel.findByIdAndUpdate(postId,post,{new:true})

//         if (exsisted) {
//             res.status(201).json({ message: "Post Updated Successfully", exsisted })
//         }
//         else {
//             res.status(404).json({ message: "Didnt Find Posts" })
//         }
//     }

//     else {
//         res.status(404).json({ message: "This post Isn't your's" })

//     }
// }


// export const getPostsWithThairOwn = async (req, res) => {

//     let posts = await postModel.find().populate("userId")
    
//     if (posts) {
//         res.status(201).json({ message: "Done", postsWith })
//     }
//     else {
//         res.status(404).json({ message: "Didnt Find Posts" })

//     }
// }