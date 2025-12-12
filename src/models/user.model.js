import mongoose from "mongoose";

const User = new mongoose.Schema({
    name: {type: String, required: true},
    user_image: {type: String, required: true},
    description: {type: String, required: true},
    designation: {type: String, required: true},
})

const user = mongoose.model("users",User)
export default user

