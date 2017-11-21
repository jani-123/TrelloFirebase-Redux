import React from "react";
import {addSignIn} from '../../actions/actions'
import trello from '../../trello-logo.png';
import './SignIn.css'
import { NavLink , Redirect} from "react-router-dom";

const SignIn = ({ successLogin }) => {
  return (
    <div className="sign">
      <img src={trello} className="logo2" />
      {
        successLogin ? 
        <Redirect to="/Board"></Redirect>
        :
        <form className="form-horizontal formulario" onSubmit={e => {
          e.preventDefault();
          addSignIn(this.emailInput.value, this.passwordInput.value);
        }}>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control texto"
              placeholder="Email"
              ref = { e => this.emailInput = e}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control texto"
              placeholder="Password"
              ref = { e => this.passwordInput = e}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-lg btn-sign-in">
              Sign in
            </button>
          </div>
        </div>
      </form>
      }
      <div className="new-vist">
        <NavLink to="/SignUp" type="button" className="btn new">
          Create new account
        </NavLink>
      </div>
      <div className="footer">
        <a href="https://trello.com" className="new">
          Trello
        </a>
        tribute for educational purposes crafted with ♥ for Chio by @ChioQA
      </div>
    </div>
  );
};

export default SignIn;
