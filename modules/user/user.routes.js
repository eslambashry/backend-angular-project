import Router from "express"
import {  getAllUSer, register ,login} from "./user.controller.js"
const userRouter = Router()


userRouter.get("/getAllUsers",getAllUSer)





userRouter.post('/register', async (req, res) => {
    try {
      const user = await register(req.body);
      res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  });
  
  userRouter.post('/login', async (req, res) => {
    try {
      const { token } = await login(req.body);
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


export default userRouter;