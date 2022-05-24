import React from "react";

import FormInput from "../form-input/form-input";

import "../../assets/scss/sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.state({ email: "", password: "" });
  };

  handleChage = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I Already Have Email And Password</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChage}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            handleChange={this.handleChage}
            label="Password"
            required
          />

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
