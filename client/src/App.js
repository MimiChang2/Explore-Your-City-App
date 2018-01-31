import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  
  handleRSVP = event => {
    
    var EventIdArray= window.location.pathname.split("/");
    var EventId = EventIdArray[EventIdArray.length - 1];
    
    // Get EventId from URL (same way we did in comments.js)
    // Get UserId from Session storage (same way we did in comments.js)
    // Then yarn build. 
    // Then replace <script src> in comments.html with new javascript file name
    let data = {
      UserId: sessionStorage.getItem('UserId'),
      EventId: EventId
    }
    axios.post("/api/rsvp", data)
    .then(res =>
       console.log(res)
      )
      .catch(err => console.log(err));
  }
    
  render() {
    return (
        <button className="button"
         onClick={this.handleRSVP}>RSVP</button>
      
    );
  }
}

export default App;
