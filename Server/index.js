import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import RatingRouter from "./Routes/RatingRoute.js"
import QuestionRoute from "./Routes/QuestionRoute.js"
import cors from "cors"
const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
dotenv.config()
mongoose.connect(process.env.MONGO_DB,
{useNewUrlParser:true,useUnifiedTopology:true}
).then(()=>{
    app.listen(process.env.PORT,()=>console.log("Listening"))
}).catch((err)=>{
   console.log(err);
   
})


app.use("/Rating",RatingRouter)
app.use('/questions',QuestionRoute)