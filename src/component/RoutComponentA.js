import React, { Component } from "react";

class RoutComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  blurHandler = e => {
    this.props.handler(this.state.name);
  };
  changeHandler = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    console.log(this.state.name);
    return (
      <div>
        <input
          type="text"
          onBlur={this.blurHandler}
          onChange={this.changeHandler}
          value={this.state.name}
        />
      </div>
    );
  }
}
export default RoutComponentA;
