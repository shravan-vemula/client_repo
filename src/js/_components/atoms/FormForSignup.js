import React, { Component } from "react";
import TextFields from "./TextFields";
import TextPasswordField from "./TextPasswordField";
import { Button } from "@material-ui/core";
import ConfirmPassword from "./ConfirmPassword";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

export class FormForSignup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorEmail: false,
      errorPassword: false,
      confirmPassword: false,
    };
  }

  handleSubmit(event) {
    if (
      !(
        this.state.errorEmail &&
        this.state.errorPassword &&
        this.state.confirmPassword
      )
    ) {
      console.log(
        this.state.errorEmail +
          "       " +
          this.state.errorPassword +
          "        " +
          this.state.confirmPassword
      );
      alert("enter valid details");
      event.preventDefault();
      return;
    } else {
      const email = document.getElementById("standard-required-emailId").value;
      console.log("email " + email);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="FormForSignup" className="signup-form">
          <form
            data-testId="formSubmit"
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
          >
            <TextFields
              value="Email Address"
              useCase="EmailId"
              state={this.state}
            />
            <TextPasswordField
              value="Password"
              state={this.state}
            ></TextPasswordField>
            <ConfirmPassword state={this.state} />
            {/* <TextPasswordField value="confirm password" /> */}
            <div className="submitButton">
              <Link to={"/SelectBank/BankTiles"}>
                {" "}
                <Button
                  onClick={(e) => this.handleSubmit(e)}
                  data-testId="submitButton"
                  variant="contained"
                  color="primary"
                >
                  <span id="lockIcon">
                    <LockIcon />
                  </span>{" "}
                  Create account
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormForSignup;
