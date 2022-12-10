import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"


function Login( {setUser}) {
	const [username, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState(null)
	const navigate = useNavigate()
 

	
       function handleSubmit(e){
       e.preventDefault();
	   const save = {username, password}
	   fetch("/login", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(save)
	})
	.then((res) => {
		if(res.ok){
			res.json().then(user => setUser(user))
			navigate('/destinations')
		
		} else {
			res.json().then(err => setErrors(err.errors))
		}
	})
  
	.then(()=>{
		
		setUserName('')
		setPassword('')
		
	  })
	}

	return (
		<div class="box">
			<form autocomplete="off" id="my-login-form" onSubmit={handleSubmit} >
				<h2 id="h2-login-form">Sign in to Safari Tour</h2>
				<div class="inputBox">
					<input
						required="required"
						id="login-input"
						type="text"
						name="username"
						value={username}
						onChange={(e)=>setUserName(e.target.value)}
						
					></input>
					<span>Username</span>
					<i></i>
				</div>
				<div class="inputBox">
					<input
						type="password"
						required="required"
						id="login-input"
						name="password"
						value={password}
						onChange={(e)=>setPassword(e.target.value)}
						
					></input>
					<span>Password</span>
					<i></i>
				</div>
				<div class="links">
					<a href>Forgot Password ?</a>
					<a href>Signup</a>
				</div>
				<input type="submit" value="Login" id="login-input"></input>
				{ errors ? 
				errors.map(error => <p style={{color: 'red'}} key={error}> {error}</p>): null} 
			</form>
		</div>
	);
	};
	


export default Login;