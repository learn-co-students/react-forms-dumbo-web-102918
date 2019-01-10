import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "Joe",
    lastName: "Henry"
  };

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.changeHandler}
        />
      </form>
    );
  }
}

export default Form;
