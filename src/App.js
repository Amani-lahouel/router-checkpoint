import './App.css';
import React, {useState} from 'react';
import MoviesCard from './MoviesCard';
import MoviesList from './MoviesList';
import Description from './Description';
import Search from './Search';
import { v4 as uuidv4 } from 'uuid';
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
const [movies,setMovies]=useState([
    { 
      main_img:
      "https://i.egycdn.com/pic/WmFwZndlY21ZdnZ0TllUdkVjd1RwbWFtamNORHo.jpg",
    title:"Paradise Cove",
    duration:"2h 29min",
    date:"2021",
    rate:4,
    genre: "action",
    description:
    " A contractor and his wife move to Malibu to flip his mother's beach house and are terrorized by the deranged homeless lady A contractor and his wife move to Malibu to flip his mother's beach house and are terrorized by the deranged homeless lady" ,
    },
    {  
      main_img:
      "https://i.egycdn.com/pic/WmFwZndlY21ZWW1tYnZORXZSY3dUbWFtRXZjbUV3Q2o.jpg",
    title:"The Princess Switch: Switched Again ",
    duration:"2h 11min",
    date:"2020",
    rate:3,
    genre: "romance",
    description:
    "When Duchess Margaret unexpectedly inherits the throne to Montenaro and hits a rough patch with Kevin, it's up to her double Stacy to save the day before a new lookalike, party girl Fiona foils their plans..",
    
    },
    {  
      main_img:
      "https://i.egycdn.com/pic/WmFwZndlY21ZbW1tbXBwVGFjYW1FUG1tYXdUbW1q.jpg",
     title:"Batman: Soul of the Dragon ",
    duration:"2h 18min",
    date:"2021",
    rate:5,
    genre: "action",
    description:
    "In the 1970s, a missing teacher of martial arts is the subject of a quest by his devoted and brilliant but distant students, who include Batman",
    },
    ])
 
    const addMovie= (movie) => {
      setMovies(movies.concat(movie))
    }
    const [keyword,setKeyword] = useState("")
    const [newRate, setNewRate] = useState(1)
    const search =(text)=> {
      setKeyword(text);
    }
    const setRate =(rate) => {
      setNewRate(rate);
    }
    return (    <div className="container">
    <Search search={search} setRate={setRate} newRate={newRate}/>
   <MoviesList addMovie={addMovie} movies= {movies.filter(movie => movie.rate >= newRate && 
     movie.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
  </div>
  
    
    
  );
}

export default App;
