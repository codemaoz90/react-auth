import axios from "axios";

const API_URL = "http://localhost:4000/user/";


class AuthService {

	login(email, password){
		return axios.post(API_URL + "sign-in",{
			email,
			password
		})
		.then(response => {
			console.log(response.data.jwtToken);
			if(response.data.jwtToken){
				localStorage.setItem("user", JSON.stringify(response.data));
			}
			
			return response.data;

		});	
	}


	logout(){
		localStorage.removeItem('user');
	}


	register(name, email, password){
		return axios.post(API_URL + 'sign-up', {
			name,
			email,
			password
		})
	}

	getCurrentUser(){
		return JSON.parse(localStorage.getItem('user'));
	}
}

export default new AuthService();