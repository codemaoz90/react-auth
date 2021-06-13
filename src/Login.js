
import {Form, FormGroup, FormControl, Button} from "react-bootstrap"
import React, {useState} from "react";
import AuthService from "./services/auth.service";
import { Redirect } from "react-router-dom";

const styleFormGroup = {
	width: "500px",
	margin: "0 auto"
}

const styleButton = {

	"margin-left": "45%",
}

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAutenticathed, setIsAuthenticated] = useState(false)
	function handleLogin(e){
		e.preventDefault();
		AuthService.login(email,password);
		

	}

		{if(isAutenticathed)  
			return ( 
				<div className="d-flex flex-column justify-content-center h-100">
				<h1 className="text-center">LOGIN</h1>
				<Form className="w-100" onSubmit={handleLogin}>
				<Form.Group style={styleFormGroup} className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
					</Form.Group>
					
					<Form.Group style={styleFormGroup} className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
					</Form.Group>
					<Form.Group style={styleFormGroup} className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button style={styleButton} variant="primary" className="text-center" type="submit">
					Submit
					</Button>
					</Form>
				</div> 
				)
				else  return <Redirect to="/home"/>
			}
			
			
		
		
	
}

export default Login;
