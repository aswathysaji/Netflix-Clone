import React from 'react'
import './NavBar.css'
import { useState,useEffect } from 'react';

function NavBar() {

  const [ show,handleShow ] = useState(false)

  useEffect(() => {
     window.addEventListener('scroll',()=>{
      if(window.scrollY > 100){
        handleShow(true);
      }
      else{
        handleShow(false);
      }
     });
     return()=>{
      window.removeEventListener('scroll',null);
     };
  }, []);
  
  

  return (
    <div className={`navbar ${show && 'nav_black' } `}/*{`navbar ${show && "nav_black" }` }*/>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>
  )
}

export default NavBar