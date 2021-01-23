
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';



import Home from './Home';
import List from './List';





ReactDOM.render(
  <BrowserRouter>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href=""></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">      
            <Link className="Nav_link" to="/">Home </Link>
          <Link className="Nav_link" to="/List">List </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/List" component={List} />
        <Route component={Error} />
      </Switch>
    </main>
  )
}


export default App;
