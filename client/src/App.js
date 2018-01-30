import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  
  handleRSVP = event => {
    
    let data = {
      UserId: 1,
      EventId: 1
    }
    axios.post("/api/rsvp", data)
    .then(res =>
       console.log(res)
      )
      .catch(err => console.log(err));
  }
    
  render() {
    return (
       <div>
        <button className="button"
         onClick={this.handleRSVP}>RSVP</button>
      </div>
    );
  }
}

export default App;
