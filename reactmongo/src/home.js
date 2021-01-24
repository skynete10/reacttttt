import React, { Component } from "react";
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


class Home extends Component {
  
  state = {
    res_var:''
  }

  submit() {
    axios.get("http://localhost:3000/mongoadd?name=" + document.getElementById("name").value + "&age=" + document.getElementById("age").value + "")
        .then(response => {
          //this.setState({ res_var: response.data });
          const birth_var=calculatebirthyear(document.getElementById("age").value);
          document.getElementById('lbl_header').innerHTML ="Hey "
            +document.getElementById("name").value+", your Birth year is "+birth_var;
            clearscreen();
        }, error => {
          console.log(error);
        });
    
  }
  render() {
    
    return (
      <form>
        <label id='lbl_header' className="lbl_class"></label>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="container">
              <label htmlFor="name" className="lbl_class"><b>Name</b></label>
              <input type="text" className="form-control" placeholder="name" id="name" required />
              <label class="lbl_class" htmlFor="age"><b>Age</b></label>
              <input type="number" className="form-control" placeholder="age" id="age" required />
              <button type="button" className="btn btn-success" onClick={this.submit} >Submit</button>
            </div>
          </header>
        </div>
      </form>
    );
  }
}

function clearscreen(){
  document.getElementById("name").value = ''
  document.getElementById("age").value = ''
}

function calculatebirthyear(age_var){
  var today = new Date();
    var currentYear = today.getFullYear() ;
    var age = parseInt(age_var, 10);
    var birthYear =  currentYear - age;
    return birthYear;
}

export default Home;