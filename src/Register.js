import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import AuthService from "./services/auth.service";

const styleFormGroup = {
	width: "500px",
	margin: "0 auto"
}

const styleButton = {

	"margin-left": "45%",
}




function Register() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState(false);



	function handleRegister(e){

		e.preventDefault();
		try {
			
			AuthService.register(name, email, password)
			.then(response => {
	
				setName('');
				setPassword('');
				setEmail('');
				
				setStatus(true);	
			})

		} catch (error) {
			console.log(error)
		}
	}

	return (
		
			<div className="d-flex flex-column justify-content-center h-100">
				<h1 className="text-center">Register</h1>
				<Form className="w-100" onSubmit={handleRegister}>
					<Form.Group	style={styleFormGroup} className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" value={name}  onChange={(e) => setName(e.target.value)}/>
					</Form.Group>
					<Form.Group style={styleFormGroup} className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e) => setEmail(e.target.value)}/>
					</Form.Group>

					<Form.Group style={styleFormGroup} className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</Form.Group>
					<Form.Group style={styleFormGroup} className="mb-3" controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button style={styleButton} variant="primary" className="text-center" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		
		
	);
}
export default Register
