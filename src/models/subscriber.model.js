import mongoose from "mongoose";

const subscriber = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    countries:  {type: Schema.type.objectId, ref: "country",required: true}, //question
},
{
    timestamps: true
})

const Subscriber = mongoose.model("subscriber",subscriber)
export default Subscriber