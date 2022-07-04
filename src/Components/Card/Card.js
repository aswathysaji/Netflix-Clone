import React, { useEffect, useState } from 'react'
import './Card.css'
import Axios from '../../Axios'
import { IMG_URL } from '../../Constants/Constants'

function Card(props) {

  const [ movies , setMovies ] = useState([])

  useEffect(() => {
    Axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    })
  },[])
  

  return (
    <div className='card'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((movie) => {
            return(
              <img className={ props.isSmall ? 'small-image' : 'card-image'} src={`${IMG_URL+movie.backdrop_path}`} alt="poster" />
            )
          })}
        </div>
    </div>
  )
}

export default Card