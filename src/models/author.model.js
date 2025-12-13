import mongoose from "mongoose";

const Author = new mongoose.Schema({
    name: {type: String, required: true},
    user_image: {type: String, required: true},
    description: {type: String, required: true},
    designation: {type: String, required: true},
},
{
    timestamps: true
})

const authors = mongoose.model("Authors",Author)
export default authors

