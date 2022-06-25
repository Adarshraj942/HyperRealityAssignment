import mongoose from "mongoose";

const RatingSchema=mongoose.Schema({
    userInfo:{
        type:Number
    },
    ratingData:{
        type:Array
    }

},
{
    timestamps:true
})


const RatingModel=mongoose.model("ratings",RatingSchema)

export default RatingModel