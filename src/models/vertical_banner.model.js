import mongoose from "mongoose";

const verticalBanner = new mongoose.Schema({
    carousel: [{ type: String, required: true }],
    country: { type: Schema.type.objectId, ref: "country",required: true },
    uid: { type: String, required: true },
},
    {
        timestamps: true
    })

const vertical_Banner = mongoose.model("verticalBanner", verticalBanner)
export default vertical_Banner