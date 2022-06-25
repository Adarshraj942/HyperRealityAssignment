import QuestionModel from "../Models/QuestionModel.js";

export const getQuestion=async(req,res)=>{
  try {
    const data=await QuestionModel.find()
    res.status(200).json(data.reverse())

  } catch (error) {
    res.status(500).json(error)
  }
   
}

export const addQuestions=async (req,res)=>{
    
    const newQuestion=new QuestionModel({
        prompt:req.body.prompt,
        Scale:req.body.Scale
    })

    try {
        const data=await newQuestion.save()
        res.status(200).json(data)
    } catch (error) {
       res.status(500).json(error) 
    }
}