import React from 'react'
import '../styles/AddDestination.css'
import AddDestinationForm from './AddDestinationForm'
function AddDestination() {
  return (
    
    <div className='Add_Destination'>
        <AddDestinationForm/>
       <h4 id='ad_title'>Safari Tours</h4> 
       <h4 id='ad_title1'>Add Your Favourite Destination Here!!!</h4> 
       <img src='https://i.ibb.co/10jdP5N/checked-circle.jpg' id='circle_checked' alt='circle_checked'></img>
       <h4 id='ad_title_h4'>We Care!</h4>
       <p id='p_circle_checked'>Safari tours is open for all people who love to nature<br />here,<br />We provide to you the best cites to see, book, and travel<br /> Welcome!!!!<br /><br /> <span class="wave">👋</span> </p>
       <img src='https://i.ibb.co/C22362z/bulbidea.png' id='bulb_idea' alt='bulb_idea'></img>
       <h4 id='ad_title_h4'>You Share!</h4>
       <p id='p_bulb_idea'>In this form feel free to share any place you <br/>saw worth sharing!!!! </p>
  
    </div>

  )
}

export default AddDestination