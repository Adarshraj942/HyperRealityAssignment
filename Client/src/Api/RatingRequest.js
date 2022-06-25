import axios from "axios";

const API=axios.create({baseURL:"http://localhost:5000"})

export const createRating=(data)=>API.post(`/rating`,data)
export const addRating=(data)=>API.put(`/rating`,data)