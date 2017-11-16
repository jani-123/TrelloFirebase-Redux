import React from "react";
import trello from '../../trello-logo.png';
//import {addStage} from '../../actions/actions'
import './SignUp.css'
import { NavLink } from "react-router-dom";

const SignUp = ({ title }) => {
  return (
    <div className="sign">
    <img src={trello} className="logo2" />
      <form className="form-horizontal formulario">
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control texto"
              placeholder="First name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control texto"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control texto"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control texto"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control texto"
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <NavLink to="/Board" type="submit" className="btn btn-lg btn-sign-in">
              Sign Up
            </NavLink>
          </div>
        </div>
      </form>
      <div className="new-vist">
        <NavLink to="/" type="submit" className="btn new">
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
