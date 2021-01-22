
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'; 

import Home from './Home';
import List from './List';


ReactDOM.render(
  <Router>
      <App />
  </Router>, 
  document.getElementById('root')
)
function App() {
  return (
    <main>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link  ><Link to="/">Home </Link></Nav.Link>
            <Nav.Link><Link to="/List">List </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
    
    </div>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/List" component={List} />
            <Route component={Error} />
        </Switch>
    </main>
)
}


export default App;
