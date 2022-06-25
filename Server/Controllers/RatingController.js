import RatingModel from "../Models/RatingModel.js";

export const addRating=async(req,res)=>{
    const user=req.body.user
   
   
    const newRating=new RatingModel({
        userInfo:user,
        ratingData:[]
    })
    try {
        const data=await newRating.save()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const setRating=async(req,res)=>{
   const Question =req.body.Question;
   const rating=req.body.rating
   const userInfo=req.body.userInfo


   const user=RatingModel.find({userInfo:userInfo})
   

   if(user){
    try {
        const data=await RatingModel.updateOne({userInfo:userInfo},{
            $addToSet:{ratingData:{Question:Question,rating:rating}}
         })
   
         res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
   }
}