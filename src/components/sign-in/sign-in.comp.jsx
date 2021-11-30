import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.comp";
import CustomButton from "../custom-button/custom-button.comp";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Hai Già un Account</h2>
        <span>Accedi con la tua email e password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit"> Accedi</CustomButton>

            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Accedi con Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
