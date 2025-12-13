import mongoose from "mongoose";

const country = new mongoose.Schema({
    name: { type: String, required: true },
    subscriber: { type: Schema.type.objectId, ref: "subscriber",required: true },
},
    {
        timestamps: true
    })

const Country = mongoose.model("country", country)
export default Country