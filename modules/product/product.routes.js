import Router from "express"
import {   addNewProduct,  getProductById,  getproducts,  } from "./product.controller.js"
const productRouter = Router()


productRouter.get("/getAllproducts",getproducts)

productRouter.get("/getProductById/:id",getProductById)

productRouter.post("/addNewproduct",addNewProduct)


export default productRouter;