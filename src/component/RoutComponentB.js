import React, { Component } from "react";

class RoutComponentB extends Component {
  //constructor(props) {
  // super(props);
  // }
  render() {
    let { params } = this.props.match;
    //console.log("props", this.props);

    return <h1> Component Value:{params.qry}</h1>;
  }
}
export default RoutComponentB;
