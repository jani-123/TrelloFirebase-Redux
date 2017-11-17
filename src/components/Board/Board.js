import React from "react";
import { signOut } from "../../actions/actions";
//import Stage from '../Stage/Stage';
import "./Board.css";
import trello from "../../trello-logo.png";
import { NavLink, Redirect } from "react-router-dom";

const NavBoard = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid  Narvab">
        <div className="navbar-header">
          <button className="btn botones" type="submit">
            <i className="fa fa-trello fa-2x iconTrello" aria-hidden="true">
              Tableros
            </i>
          </button>
        </div>
        <div className="navbar-header">
          <img src={trello} className="logo" />
        </div>
        <div className="navbar-header">
          <h4 className="user">
            <i className="fa fa-user-circle" aria-hidden="true" />  {user.email}  | <button className="btn-link btn-signout" onClick={signOut}>Cerrar Sesión</button>
          </h4>
        </div>
      </div>
    </nav>
  );
};

const Board = ({ successLogin, user }) => {
  return (
    <div className="Board-container">
      {!successLogin && <Redirect to="/SignIn" />}
      <div>
        <NavBoard user={user}/>
        <div>
          HOLA MUNDO!!
        </div>
        
      </div>
    </div>
  );
};

export default Board;
