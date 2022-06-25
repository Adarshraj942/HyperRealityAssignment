import express from "express"
import { addRating, setRating } from "../Controllers/RatingController.js";

const router=express.Router()


router.post('/',addRating)
router.put('/' ,setRating)
export default router;