import React from "react";
import {
  signOut,
  changeTrue,
  saveDataBoard,
  changeView
} from "../../actions/actions";
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
            <i className="fa fa-user-circle" aria-hidden="true" /> {user.email}
            |
            <button className="btn-link btn-signout" onClick={signOut}>
              Cerrar Sesión
            </button>
          </h4>
        </div>
      </div>
    </nav>
  );
};

const NewBoard = ({ board, index }) => {
  return (
    <div key={index} className="box col-md-3">
      <NavLink
        to="/DetailBoard"
        onClick={() => {
          changeView(index);
        }}
      >
        <div className="board">
          <p>{board.title}</p>
        </div>
      </NavLink>
    </div>
  );
};

const MyBoard = ({ boards, active }) => {
  console.log("board", boards);
  let newBoard = "";
  return (
    <div>
      <div className="container-fluid">
        <div>
          {boards.map((item, index) => {
            return <NewBoard key={index} board={item} index={index} />;
          })}
          <div className="col-md-3">
            {active ? (
              <div className="newBoard">
                  <p>New board</p>
                <input
                  className="InpuTitle"
                  placeholder="Title Board"
                  onChange={e => {
                    newBoard = e.currentTarget.value;
                  }}
                />
                <button
                  className="btn btn-success save"
                  onClick={() => {
                    saveDataBoard(newBoard);
                  }}
                >
                  Create new board
                </button>
                <button className="btn remove">X</button>
              </div>
            ) : (
              <div
                className="board"
                onClick={() => {
                  changeTrue();
                }}
              >
                <h4>Add new board...</h4>
              </div>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

const Board = ({ successLogin, user, boards, active }) => {
  return (
    <div>
      {!successLogin && <Redirect to="/" />}
      <div>
        <NavBoard user={user} />
        <h3 className="myBoards">My Board</h3>
        <MyBoard boards={boards} active={active} />
      </div>
    </div>
  );
};

export default Board;
