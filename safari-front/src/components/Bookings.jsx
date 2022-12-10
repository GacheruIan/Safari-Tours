import React from 'react';
import { useState } from 'react';
import './Booking.css'

export default function Booking() {
    const [fullname, setFullname] = useState('');
    const [destination_name, setDestination_name] = useState('');
    const [date, setDate] = useState('');
    
    function handleClick()
    {
        alert("Booking Was Successful") 
    }  
    
       
    function submitForm(event) {
        event.preventDefault();
        const booking_data = { fullname, destination_name, date }
        event.target.reset();

        fetch('/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(booking_data)
        })
            .then((res) => res.json())
            .then(() => {
                setFullname("")
                setDestination_name("")
                setDate("")            
            })
    }

  



    return (
        <div className='myform'>
            <form className="form-review" onSubmit={submitForm} >
              <h2>Book a Tour</h2>
           
                <label htmlFor="company-title">Full name.</label>
                <input type="text" value={fullname} required placeholder='Enter Full-Name Here' onChange={(event) => setFullname(event.target.value)} />
               
                <label htmlFor="company-code"> Destination name.</label>
                <input type="text" value={destination_name} required placeholder='Enter Destination Point' onChange={(event) => setDestination_name(event.target.value)} />
           
                <label htmlFor="book-stockPrice">Date.</label>
                <input type="number" value={date} required placeholder='Enter Visiting Date' onChange={(event) => setDate(event.target.value)} />
          
                <button id='my-booking-btn' onClick={handleClick}>Book</button>

            </form>
        </div >
    );
}
