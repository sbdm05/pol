import React, { Component } from "react";
import Accounts from "./accounts";
import {
  Link,
  browserHistory,
  BrowserRouter,
  Router,
  withRouter
} from "react-router-dom";
import history from "../components/history";

class Header extends Component {
  onLawClick(event) {
    event.preventDefault();
    Meteor.call("laws.insert", (error, lawId) => {
      console.log(lawId);
      console.log(this.props.history);
      this.props.history.push(`/laws/${lawId}`);
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            Politics
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Accounts />
          </li>
          <li>
            <a href="#" onClick={this.onLawClick.bind(this)}>
              Créer une loi
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Header);
