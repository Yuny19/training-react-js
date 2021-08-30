import React, { Component } from "react";

class Toggle extends Component {
  state = {
    keyword: "", //admin
    response: "",
  };

  inputHandler = (e) => {
    return this.setState({ keyword: e.target.value });
  };

  login = (e) => {
    e.preventDefault();

    return this.state.keyword === "admin"
      ? this.setState({ response: "Dashboard" })
      : this.setState({ response: "please request access" });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="your role"
            onChange={this.inputHandler}
          />
          <button type="submit" onClick={(e) => this.login(e)}>
            Login
          </button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

export default Toggle;
