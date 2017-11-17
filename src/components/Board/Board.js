import React from "react";
import {signOut} from '../../actions/actions'
//import Stage from '../Stage/Stage';
//import './Board.css'
import { NavLink , Redirect} from "react-router-dom";

const Board = ({ successLogin, user }) => {
  return <div className="Board-container">
      {!successLogin && <Redirect to="/SignIn" />}
      <div>
        <div>
          {user.firstname} - {user.lastname} - {user.email} 
        </div>
        <div>
          <button type="button" className="btn new" onClick={signOut}>
            SignOut
          </button>
        </div>
      </div>
    </div>;
};

export default Board;
