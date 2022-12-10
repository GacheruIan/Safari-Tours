import React from 'react'
import {useState} from 'react'
import "../styles/Signup.css"



function Signup() {
  const [fullname, setFullName] = useState ('');
  const [username, setUserName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  function handleSubmit(e){
    e.preventDefault();
    const save = {fullname, username, email, password}
    fetch("/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(save)
  })
  .then((res) => res.json())

  .then(()=>{
      setFullName('')
      setUserName('')
      setEmail('')
      setPassword('')
      
    })
   
  }
 
  return (
    <div class="g-container">
       <h1 class="g-form-title">Safari Tour</h1>
       <form action="#" onSubmit={handleSubmit}>
         <div class="g-main-user-info">
            <div class="g-user-input-box">
             
               <label for="fullname">Full Name</label>
               <input type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter Full Name"
                    required="required"
                    value={fullname}
                    onChange={(e)=>setFullName(e.target.value)}
                    />
            </div>
            {/* <!-- end first name -->
            <!-- username section --> */}
           <div class="g-user-input-box">
              <label for="username">Username</label>
              <input type="text"
                    id="username"
                    name="username"
                    placeholder="Enter Username"
                    required="required"
                    value={username}
                    onChange={(e)=>setUserName(e.target.value)}
                    />
                 
           </div>
           {/* <!-- end username section -->
           <!-- start email section  --> */}
           <div class="g-user-input-box">
              <label for="email">Email</label>
              <input type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    required="required"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />

            </div>
         
             <div class="g-user-input-box">
                <label for="password">Password</label>
                  <input type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    required="required"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                   
            </div>
         
         </div>
        
        
          <div class="g-form-submit-btn">
           <input type="submit" value="Signup"/>
         </div>
         
       </form>
    </div>
   
   
  )
}

export default Signup
