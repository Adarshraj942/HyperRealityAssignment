import mongoose from "mongoose";

const QuestionsSchema=mongoose.Schema({
    prompt:{
        type:String
    },
    Scale:{
        type:Number
    }
},{
    timestamps:true
})

const QuestionModel=mongoose.model("questions",QuestionsSchema)

export default QuestionModel