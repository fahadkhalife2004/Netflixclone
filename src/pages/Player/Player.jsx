import React, { useEffect, useState } from 'react'
import './Player.scss'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function player() {
  const{id}=useParams();
  const navigate = useNavigate();

const [apiData,setApiData]= useState({
  name:"",
  key:"",
  published_at:"",
  typeof:"title"
})

 const options = {
  method: 'GET',
  headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjA2MTNlMGI1YTY3ZWE1MDc5ZWRkODUwM2UxMjhmNiIsIm5iZiI6MTc1MjE1MTMzNS44MDA5OTk5LCJzdWIiOiI2ODZmYjUyNzdiNzYyYWVmNzI5YTUyNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9kO6AqwJ7feceyo0CzEdROV0zXYgFl51lpQ6f4KKRas'
  }
};
// useEffect(()=>{
//   fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
//   .then(response => response.json())
//   .then(response => setApiData(response.result[0]))
//   .catch(err => console.error(err));
// },[])

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(data => {
      if (data.results && data.results.length > 0) {
        setApiData(data.results[0]);
      } else {
        console.warn('No video results found for this movie ID.');
        setApiData({
          name: "No trailer available",
          key: "",
          published_at: "",
          typeof: "title"
        });
      }
    })
    .catch(err => console.error(err));
}, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.Type}</p>
      </div>
    </div>
  )
}

export default player
