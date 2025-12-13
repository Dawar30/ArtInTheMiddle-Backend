import mongoose from "mongoose";

const inPageBanner = new mongoose.Schema({
    image: { type: String, required: true },
    country: { type: Schema.type.objectId, ref: "country",required: true },
    uid: { type: String, required: true },
},
    {
        timestamps: true
    })

const InPageBanner = mongoose.model("category", inPageBanner)
export default InPageBanner