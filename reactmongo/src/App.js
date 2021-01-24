
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import List from './List';
import NavBAR from './NavBAR';

class App extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
          <NavBAR></NavBAR>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/List" component={List} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}


export default App;
