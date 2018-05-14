import React, { Component } from "react";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import { Query } from "react-apollo";
import Register from "./Register";
import Login from "./Login";

class User extends Component {
  constructor(props) {
    super(props);
  }

  handleSignOut = client => {
    localStorage.removeItem("jwt");
    client.resetStore();
  };

  render() {
    return (
      <section className="user">
        <h2>User</h2>
        <div>
          <Register />
          <Login props={this.props} />
        </div>
      </section>
    );
  }
}

export default User;
