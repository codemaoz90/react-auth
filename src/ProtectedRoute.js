import React from 'react'
import {Redirect, Route} from 'react-router-dom';
function ProtectedRoute({component: Component, ...restOfProps}) {

	const res = JSON.parse(localStorage.getItem('user'));
	console.log("AUTENTICADO", res.isAuthenticated);

	return (
		
		<Route
		{...restOfProps}
		render={(props) =>
		  res.isAuthenticated ? <Component {...restOfProps} {...props} /> : <Redirect to="/login" />
		}
	  />
	)
}

export default ProtectedRoute
