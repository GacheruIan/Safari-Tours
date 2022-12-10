
import React from 'react'
import {NavLink} from 'react-router-dom'
import "../styles/NavBar.css"
import { useNavigate } from "react-router-dom";



function Navbar({setUser}) {
  const navigate = useNavigate();



  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        r.json().then(r => setUser(null))
      }
      navigate('/')
  
    });
  }

  return (
    <div className='navbar'>
      
        <div className='navlink'>
        <h3>SAFARI TOUR</h3>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/destinations'>Destinations</NavLink>
          <NavLink to='/adddestination'>AddDestination</NavLink>  
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to= '/booking'>Book With Us</NavLink>
   </div>
       <div className='g-btn'>
          <NavLink to= '/Signup'><button className="book-btn" type="submit" >
              Signup
            </button>
          </NavLink>
            <div className='g-log'>
          <NavLink to= '/Login'><button className="book-btn" type="submit" >
              Login
            </button>
          </NavLink>
      </div>
          <button className="book-btn" type="submit" onClick={handleLogoutClick}>
              Logout
          </button>
      </div>
                   

    </div>
  )
}

export default Navbar