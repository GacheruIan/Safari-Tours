import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Destinations.css'

function Destinations({image}) {

    const navigate = useNavigate()

    function handleClick(){
      fetch("/destinations/"+ image.id , {
        method: 'DELETE',
        head: "no_content"
      })
      navigate('/destinations')
    }
    return( 
            <div className='destination-card' key={image.id}>
                <div className='destination-title'>
                <h2 id='destinations-head'>{image.title}</h2>
                </div>
                <div className='destination-image'>
                <img src={image.image_url} alt="img" width={290} height={320}/>
                </div>
                <a href ='destination_site_url' id='des-site-url'>
                <p id='destination_site_url'>{image.site_url}</p>
                </a>
                <div className='destination-description'>
                <p id='destination-description'>{image.Description}</p> 
            </div>
            
            <button onClick={handleClick} id='dest-delete-btn'>Delete</button>
            </div> 
    )  

  
}         

export default Destinations