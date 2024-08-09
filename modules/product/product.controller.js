import { productModel } from "../../model/products/products.model.js"


export const getproducts = async (req, res,next) => {
    let products = await productModel.find()

    if (products) {
        res.status(201).json({ message: "Done", products })
    }
    else {
        res.status(404).json({ message: "Didnt Find products" })

    }
}

export const addNewProduct = async (req, res,next) => {
    

    let product = await productModel.insertMany(req.body)

    res.status(201).json({ message: "Post Added Successfully", product })
}



export const getProductById = async(req,res,next) => {

    const {id}= req.params

    const productExsist = await productModel.findById(id)

    if(productExsist){
        res.status(201).json({message:"Done",productExsist})
    }
    else{
        res.status(404).json({message:"product not found"})
    }
}



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