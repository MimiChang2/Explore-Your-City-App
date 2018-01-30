import React from "react";

class RsvpButton extends Component {
    state = {
        rsvp: false
    };
    
    handleInputChange = event => {
        const {name, response} = event.target;
        
        this.setState({
            [name]: response
        });
    };
    
      render() {
    return (
      <div>
        <form className="form">
          <input
            value={this.state.rsvp}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleInputChange}>RSVP</button>
        </form>
      </div>
    );
  }
}

export default RsvpButton;