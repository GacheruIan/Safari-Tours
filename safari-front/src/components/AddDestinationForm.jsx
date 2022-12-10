import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/AddDestinationForm.css'

function AddDestinationForm() {
const [title, setTitle] = useState('');
const [image_url, setImage] = useState('');
const [site_url, setSite_url] = useState('');
const [description, setDescription] = useState('');
const navigate = useNavigate();

function handleSubmit (e) {
  e.preventDefault();
  const site = {title,image_url, site_url,description}
 
  

  fetch("/destinations",{
    method: 'POST',
    headers: {"content-Type": "application/json"},
    body: JSON.stringify(site)
  })
  .then((res) => res.json())
  .then(()=>{
    setTitle('')   
    setImage('')
    setSite_url('')
    setDescription('')
   navigate('/destinations')
  })


}

  return (
    <div className='destinationform'>
    <div className="destinationformbox">
    <form autocomplete="off" className='formdf' onSubmit={handleSubmit}>
       <h2 id='destination-form-head'>Add Destination</h2>
       <div class="inputBox">

        <input type="text" 
        required="required"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />
        <span>Title</span>
        <i></i>
   </div>

   <div class="inputBox">

       <input type="text" 
       required="required"
       value={image_url}
       onChange={(e) => setImage(e.target.value)}
        />

       <span>Image</span>
       <i></i>
   </div>

   <div class="inputBox">

       <input type="text" 
       required="required"
       value={site_url}
       onChange={(e) => setSite_url(e.target.value)}
        />

       <span>Site_url</span>
       <i></i>
   </div>

   <div class="inputBox">

       <input type="text" 
       required="required"
       value={description}
       onChange={(e) =>  setDescription(e.target.value)}
        />

       <span>Description</span>
       <i></i>
   </div>

       <input type="submit"  value="Add" className='destsubmit'/>

  

  </form>
</div>
</div>
  )
}

export default AddDestinationForm