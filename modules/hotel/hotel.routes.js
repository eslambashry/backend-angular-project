import Router from "express"
import {   addNewProduct,  getProductById,  getproducts,  } from "./hotel.controller.js"
import { multerCloudFunction } from "../../services/multerCloud.js"
import { allowedExtensions } from "../../utilities/allowedExtentions.js"
const hotelRouter = Router()


hotelRouter.get("/getAllproducts",getproducts)

hotelRouter.get("/getProductById/:id",getProductById)

hotelRouter.post("/addNewproduct",multerCloudFunction(allowedExtensions.Image).single('photos', 10),addNewProduct)

export default hotelRouter;