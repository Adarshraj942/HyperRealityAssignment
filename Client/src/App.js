
import { useState } from 'react';
import './App.css';
import MainMenu from './Components/MainMenu/MainMenu';
import Rating from './Components/Rating/Rating';
import EndMenu from './Components/EndMenu/EndMenu';
import {RatingContext} from "./Helpers/Contexts"
function App() {
  const [rating,setRating]=useState("menu")
  const [Questions,setQNA]=useState([])
  return (
 
<>

<div className="App">
<h2 className='title'> Rating App...!</h2>
<div className="blur" style={{top:"-18%" ,right:"0"}}></div>
      <div className="blur" style={{top:"36%" ,left:"-8rem"}}></div>
 <RatingContext.Provider value={{rating,setRating,Questions,setQNA}}>
{rating==="menu" && <MainMenu/>}
{rating==="rating" && <Rating/>}
{rating==="endScreen" && <EndMenu/>}
</RatingContext.Provider>

</div>
</>
  );
}

export default App;
