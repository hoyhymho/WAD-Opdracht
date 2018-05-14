import React, { Component } from "react";
import REGISTER from "../graphql/register";
import { Mutation } from "react-apollo";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { showRegister: true };
  }

  handleSubmit = async (e, register) => {
    e.preventDefault();
    const form = e.target;
    const variables = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    };

    const {data} = await register({ variables });
    if(data.user.email) {
      this.setState({ showRegister: false})
    }
  };

  render() {
    return (
      <article>
        <h3>Register</h3>
        {this.state.showRegister ? (
          <Mutation mutation={REGISTER}>
            {register => (
              <form className="userform" onSubmit={e => this.handleSubmit(e, register)}>
                <label htmlFor="reg-name">Name</label>
                <input type="text" id="reg-name" name="name" required />
                <label htmlFor="reg-email">E-mail</label>
                <input type="email" id="reg-email" name="email" required />
                <label htmlFor="reg-pwd">Password</label>
                <input type="password" id="reg-pwd" name="password" required />
                <input type="submit" value="Register" />
              </form>
            )}
          </Mutation>
        ) : (
          <p>Registered, now log in!</p>
        )}
      </article>
    );
  }
}

export default Register;
