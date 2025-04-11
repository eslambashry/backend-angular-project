import mongoose from "mongoose";

export const connectedDB = async () => { 
    mongoose.connect(process.env.DB_CONNECTION_URL)
.then(() => { console.log("Database Connected ✔️"); })
.catch((err) => { console.log("Conection Fail ⚠️",err); })
}