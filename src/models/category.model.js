import mongoose from "mongoose";

const category = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true },
},
    {
        timestamps: true
    })

const Category = mongoose.model("category", category)
export default Category