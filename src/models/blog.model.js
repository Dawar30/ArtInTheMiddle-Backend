import mongoose, { Schema } from "mongoose";

const blog = new mongoose.Schema({
    title: {type: String, required: true},
    featureImage: {
        image: {type: String, required: true},
        image_description: {type: String, required: true},
        published_date : {type: String, required: true}
    },
    author: {type: Schema.type.objectId, ref: user, required: true},
    content: {type: String, required: true},
},
{
    timestamps: true
})

const Blog = mongoose.model("blog",blog)
export default Blog

