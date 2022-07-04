import React, { useEffect, useState } from 'react'
import Axios from '../../Axios'
import { API_KEY,IMG_URL } from '../../Constants/Constants'
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
    let random = Math.floor(Math.random() * ( 19 - 0 + 1 ) + 0)
    Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[random])
    })
  },[])

  return (
    <div style={{ backgroundImage: `url(${movie ? IMG_URL+movie.backdrop_path : null  })` }} className='banner'>
        <div className='content'>
            <h1 className='title'>{ movie ? movie.title : null }</h1>
            <div className='buttons'>
                <button className='play'>Play</button>
                <button className='my-list'>My List</button>
            </div>
            <h3 className='description'>{ movie ? movie.overview : null }</h3>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner