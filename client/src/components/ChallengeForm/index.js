// import React from 'react'
//import { Link } from 'react-router-dom'
import './style.css'
import React, { Component } from "react";

class ChallengeForm extends Component {
  // Setting the component's initial state
  state = {
    howMany: "",
   
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.howMany;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.howMany || !this.state.lastName) {
      alert("How many can you really do!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName} ${this.state
          .lastName}`
      );
    } else {
      alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    }

    this.setState({
      howMany: "",
    
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
        </p>
        <form className="form">
          <input
            value={this.state.howMany}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="How Many can You Do?"
          />
        </form>

         

        {/* <button onClick={this.handleFormSubmit}>ReTry</button> */}
      </div>
    );
  }
}


export default ChallengeForm



















// function ChallengeForm() {
//     return (

//       <div className="card" style={{ backgroundColor: "yellow" }}>
//         <div className="container" style={{ color: "red", height: "250px", width: "250px", }}>

//         </div>
//       </div>
//     );
//   }




// eslint-disable-next-line no-undef