import React from 'react'
import '../styles/Home.css'
import About from './About'

import WhyUs from "./WhyUs"

function Home() {
  return (
    <div>
    
    <div className='main-container'>
    <h1 aria-label="Great Destinations">
     Great Destinations&nbsp;<span class="typewriter"></span>
    </h1>
    
    <button className='btn'> Karibu!</button>
   </div>
 <About />
  <WhyUs/>
  </div>
      )
}

export default Home