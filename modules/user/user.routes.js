import Router from "express"
import { getAllUsers, login, register } from "./user.controller.js";

const userRoutes = Router()

userRoutes.post("/register",register)
userRoutes.post("/login",login)
userRoutes.post("/getAllUsers",getAllUsers)


export default userRoutes;