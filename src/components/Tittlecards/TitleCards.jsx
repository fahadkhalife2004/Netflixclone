import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.scss'
import cards_data from '../../assets/cards/cards_data'
import { Link } from 'react-router-dom'


function TitleCards({title,category}) {
  
  const [apidata,setapidata] = useState([])
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjA2MTNlMGI1YTY3ZWE1MDc5ZWRkODUwM2UxMjhmNiIsIm5iZiI6MTc1MjE1MTMzNS44MDA5OTk5LCJzdWIiOiI2ODZmYjUyNzdiNzYyYWVmNzI5YTUyNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9kO6AqwJ7feceyo0CzEdROV0zXYgFl51lpQ6f4KKRas'
    }
  };

  const handleWheel =(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    console.log(response.results)
    setapidata(response.results)
  })
  .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])


  return (
    <div className='titlecards'>
      <h2> {title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card,index)=>{
          return<Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500` +card.backdrop_path} alt="" />
          <p>{card.original_title}</p>
          </Link>     
        })} 
      </div>
    </div>
  )
}

export default TitleCards
