import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from "./Home"
import {Container} from 'react-bootstrap'
// REACT ROUTER DOM IMPORT

function App() {
  return (
    <Container style={{height:"100vh"}}>

         <Router>
              <Route exact path={["/", "/login"]} component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute exact path="/home" component={Home} />
         </Router>
          
    </Container>
   
  );
}

export default App;
