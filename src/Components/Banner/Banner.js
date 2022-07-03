import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='buttons'>
                <button className='play'>Play</button>
                <button className='my-list'>My List</button>
            </div>
            <h3 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam dolore itaque aliquid minima ipsam libero fuga, optio reprehenderit voluptate odit quibusdam temporibus sit cupiditate recusandae eveniet? Consectetur, ex vel?</h3>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner