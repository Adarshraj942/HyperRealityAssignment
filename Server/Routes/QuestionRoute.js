import express from "express"
import { addQuestions, getQuestion } from "../Controllers/QuestionController.js";
const router=express.Router()

 
router.get('/',getQuestion)
router.post('/',addQuestions)
export default router;