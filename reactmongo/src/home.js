import React, { Component } from "react";
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <div className="container">

          
          <label htmlFor="name" className="lbl_class"><b>Name</b></label>
          <input type="text" className="form-control" placeholder="name" id="name" required />
          <label class="lbl_class" htmlFor="age"><b>Age</b></label>
          <input type="number" className="form-control" placeholder="age" id="age" required />

          <button type="button" className="btn btn-success" onClick={submit}>Submit</button>

        </div>
      </header>
    </div>
    );
  }
}
function submit() {

  fetch("http://localhost:3000/mongoadd?name=" + document.getElementById("name").value + "&age=" + document.getElementById("age").value + "")
    .then(res => res.json())
    .then(
      (result) => {
        alert("Asd");
      }
    )
}
export default Home;