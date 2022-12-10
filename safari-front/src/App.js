
import MainDestination from './components/MainDestination';
import Signup from './components/Signup';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/NavBar';
import { Routes, Route  } from "react-router-dom";
import Home from './components/Home';
import AddDestination from './components/AddDestination';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Booking from './components/Bookings';

import About from './components/About';

function App() {
  const [user, setUser] = useState(null)
  return (
  
    <div className="app">
     
     
      <Navbar user={user} setUser={setUser} />
      <Routes>
         <Route  exact path="/" element={<Home/>}/>
         <Route  path='/destinations' element={<MainDestination user={user}/>}/>
         <Route  path='/adddestination' element={<AddDestination/>}/>
         <Route  path='/contact' element={<Contact/>}/>
         <Route  path='/login' element={<Login setUser={setUser} />}/>
         <Route  path='/signup' element={<Signup setUser={setUser} />}/>
         <Route  path='/booking' element={<Booking />}/>
         <Route path='/about' element={<About />}/>
       </Routes>
      <Footer/>
    </div>

  )}

  
   export default App;