import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RatingContext } from '../../Helpers/Contexts'
const EndMenu = () => {
  const {rating,setRating}=useContext(RatingContext)
  const {Questions,setQNA}=useContext(RatingContext)
  useEffect(()=>{
    setTimeout(() => {
      setQNA([])
      setRating("menu")
      
      sessionStorage.clear("userInfo")
     
    },5000);
  })
  return (
    <div>
      <img style={{width:"250px",height:"250px"}} src="https://www.pikpng.com/pngl/b/245-2455199_75-off-png-transparent-images-thank-you-icon.png" alt="" />
    </div>
  )
}

export default EndMenu
