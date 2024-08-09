import mongoose from "mongoose";

export const connectedDB = mongoose.connect(`mongodb://127.0.0.1:27017/Angular-backend`)
.then(() => { console.log("DB conected"); })
.catch(() => { console.log("Conection Fail"); })
