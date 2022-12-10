import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Destinations from './Destinations'



function Main({user}) {
const[images, setImages] = useState([]);

  useEffect(() => {
  
    fetch("/destinations")
   
    .then((res)=>res.json())

    .then((resp)=>{
      setImages(resp)

    });
  }, []);
  
  const Destination = images.map(image => (<Destinations  key={image.id} image={image} user={user} />))
  
  return (

    <div className='main-destination' style={{display: 'flex', justifyContent: 'space-evenly'}}>
       { user? Destination : 
       <h1 style={{textAlign: 'center', height: '200px', margin: '50px 0 50px'}}>You are not authorized! Please Log in or Sign up to View Destination.</h1> }
    </div>
  )
}

export default Main