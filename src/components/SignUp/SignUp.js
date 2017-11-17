import React from "react";
import trello from "../../trello-logo.png";
import { addSignUp } from "../../actions/actions";
import "./SignUp.css";
import { NavLink, Redirect } from "react-router-dom";

const SignUp = ({ successLogin }) => {
  return (
    <div className="sign">
      <img src={trello} className="logo2" />
      {successLogin && <Redirect to="/Board" />}
      <form
        className="form-horizontal formulario"
        onSubmit={e => {
          e.preventDefault();
          addSignUp(
            this.firstName.value,
            this.lastName.value,
            this.email.value,
            this.password.value
          );
        }}
      >
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control texto"
              placeholder="First name"
              ref={e => (this.firstName = e)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control texto"
              placeholder="Last name"
              ref={e => (this.lastName = e)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control texto"
              placeholder="Email"
              ref={e => (this.email = e)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control texto"
              placeholder="Password"
              ref={e => (this.password = e)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-lg btn-sign-in">
              Sign Up
            </button>
          </div>
        </div>
      </form>
      <div className="new-vist">
        <NavLink to="/SignIn" type="submit" className="btn new">
          Sign In
        </NavLink>
      </div>
      <div className="footer">
        <a href="https://trello.com" className="new">
          Trello
        </a>{" "}
        tribute for educational purposes crafted with ♥ for Chio by @ChioQA
      </div>
    </div>
  );
};

export default SignUp;
