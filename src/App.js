import React, { Component } from "react";
import "./styles.css";
import { Route, Link, withRouter } from "react-router-dom";
import RoutComponentA from "./component/RoutComponentA";
import RoutComponentB from "./component/RoutComponentB";

class App extends Component {
  constructor(props) {
    super(props);
    this.name = "";
  }
  getQueryValue = value => {
    this.name = value;
  };
  redirectToB = e => {
    this.props.history.push(`/componentB/${this.name}`);
  };
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/componentA">ComponentA</Link>
          </li>
          <li>
            <Link to={{}} onClick={this.redirectToB}>
              ComponentB
            </Link>
          </li>
        </ul>
        <Route
          path="/componentA"
          exact
          component={() => <RoutComponentA handler={this.getQueryValue} />}
        />

        <Route path="/componentB/:qry" component={RoutComponentB} />
      </div>
    );
  }
}
export default withRouter(App);
