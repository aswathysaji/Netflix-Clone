import React, { useEffect, useState } from 'react'
import './Card.css'
import Axios from '../../Axios'
import { API_KEY, IMG_URL } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function Card(props) {

  const [ youtubeid, setYoutubId ] = useState('')
  const [ movies , setMovies ] = useState([])

  useEffect(() => {
    Axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setYoutubId(response.data.results[0])
      }
      else{
        console.log('Trailer is not available');
      }
    })
  }
  

  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie) => {
            return(
              <img onClick={()=>{handleMovie(movie.id)}} className={ props.isSmall ? 'small-image' : 'card-image'} src={`${IMG_URL+movie.backdrop_path}`} alt="poster" />
            )
          })}
        </div>
        { youtubeid && <YouTube videoId={youtubeid.key} opts={opts}  />}
    </div>
  )
}

export default Card