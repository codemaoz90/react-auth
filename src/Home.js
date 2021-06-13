import React from 'react'
import AuthService from "./services/auth.service";
function Home() {

	const currentUser = AuthService.getCurrentUser();
	// console.log("CURRENT USER:", currentUser)
	return (
		<div>
			<h1>Welcome to Home</h1>
			<p>My name is {currentUser.user[0].name}</p>
			<p>My email is {currentUser.user[0].email}</p>		
		</div>
	)
}

export default Home
