import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./home";
import axios from "axios";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <div class="container">
         <label for="name" class="lbl_class"><b>Name</b></label>
    <input type="text" class="form-control" placeholder="name" id="name" required/>
    <label class="lbl_class" for="age"><b>Age</b></label>
    <input type="number" class="form-control" placeholder="age" id="age" required/>
        
    <button type="button" class="btn btn-success" onClick={submit}>Submit</button>
    
         </div>
      </header>
    </div>
  );
}
function submit(){
  fetch("http://192.168.0.158:3000/?name="+document.getElementById("name").value+"&age="+document.getElementById("age").value+"")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true
          });
        }
      )
}
export default App;
