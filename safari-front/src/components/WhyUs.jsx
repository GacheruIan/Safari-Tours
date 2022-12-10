import React from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
import { MdTimer} from 'react-icons/md'
import {FaMoneyCheck,FaShuttleVan} from 'react-icons/fa'
import "../styles/WhyUs.css"

function WhyUs() {
    
  return (
    <div className='g-why'> 
        <h2 className='g-title'>Why choose us?</h2>
        
          <section id='us'>
          <div id='over'>
          <GiEarthAmerica id='earth'/>
          <h3>Over 50 destinations</h3>
          <p>Travel to over 50 unique destinations in Kenya</p>
      </div>
      <div id='trip'>
         <FaShuttleVan id='van'/>
         <h3>Hundreds of trips made</h3>
         <p>Hundreds of trips made each year all over Kenya</p>
      </div>

      <div id='support'>
        <MdTimer id='timer'/>
        <h3>Fastest Support</h3>
        <p>Access to our support 24/7 </p>
      </div>

      <div id='deals'>
       <FaMoneyCheck id='money'/>
        <h3>Best Deals</h3>
        <p>We offer the best prices</p>
      </div>
      </section>
      </div>
  
  )
}


export default WhyUs;