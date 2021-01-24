import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



class List extends Component {
  state = {
    data_rest: []
  }
  
  componentDidMount() {
    axios.get('http://localhost:3000/mongolist')
      .then(response => {
        this.setState({ data_rest: response.data });
        //console.log(this.state);
      }, error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data_rest.map(data_rest_var => (
                <tr key={data_rest_var.id}>      
                  <td>{data_rest_var.name}</td>
                  <td>{data_rest_var.age}</td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default List;