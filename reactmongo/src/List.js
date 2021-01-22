import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var data = [{
  id: 1,
  name: "Pete Hunt",
  age: "This is one comment",
}, {
  id: 2,
  name: "aaa fff",
  age: "22",
}, {
  id: 5,
  name: "Pete Hunt",
  age: "24",
}];
class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Default</td>
                  <td>Defaultson</td>
                
                </tr>

              </tbody>
            </table>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;