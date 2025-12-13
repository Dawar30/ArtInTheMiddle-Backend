import mongoose from "mongoose";

const TopBanner = new mongoose.Schema({
    image: { type: String, required: true },
    mobile_image: { type: String, required: true },
    url: { type: String, required: true },
    ad_url: { type: String, required: true },
    country: { type: Schema.type.objectId, ref: "country",required: true },
    uid: { type: String, required: true },
},
    {
        timestamps: true
    })

const topBanner = mongoose.model("TopBanner", TopBanner)
export default topBanner