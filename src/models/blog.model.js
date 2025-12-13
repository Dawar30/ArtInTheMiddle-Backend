import mongoose from "mongoose";

const blog = new mongoose.Schema({
    title: { type: String, required: true },
    feature_image: { type: String, required: true },
    slug: { type: String, required: true },
    slugRoute: { type: String, required: true },
    Number: { type: String, required: true },
    Popular: { type: String, required: true },
    Related: { type: String, required: true },
    published_date: { type: String, required: true },
    author: { type: Schema.type.objectId, ref: "Authors", required: true },
    long_description: { type: String, required: true },
    shorText: { type: String, required: true },
    section: { type: String, required: true },
    tags: { type: String, required: true },
    category: { type: Schema.type.objectId, ref: "category", required: true },
    country: { type: Schema.type.objectId, ref: "country", required: true },
    seo: {
        metaTitle: { type: String, required: true },
        metaDescription: { type: String, required: true },
        canonical_url: { type: String, required: true },
        openGraph: {
            OG_Title: { type: String, required: true },
            OG_Description: { type: String, required: true },
            OG_Image: { type: String, required: true },
        }
    }

},
    {
        timestamps: true
    })

const Blog = mongoose.model("blog", blog)
export default Blog

