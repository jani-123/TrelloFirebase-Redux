import React from "react";
import {
  signOut,
  changeTrue,
  saveDataCardList,
  saveDataLIst,
  changeDataTrue
} from "../../actions/actions";
//import Stage from '../Stage/Stage';
import "./DetailBoard.css";
import trello from "../../trello-logo.png";

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
            <i className="fa fa-user-circle" aria-hidden="true" /> {user.email}{" "}
            |{" "}
            <button className="btn-link btn-signout" onClick={signOut}>
              Cerrar Sesión
            </button>
          </h4>
        </div>
      </div>
    </nav>
  );
};

const NoteList = ({ board, index, selectIdBoard, active }) => {
  let card = "";
  return <div key={index} className={board.change ? "note" : "noteList"}>
      <p>{board.subtitle}</p>
      
        {board.cards.map((value, i) => {
          console.log("key", i, "value", value);
          
        })}
      
      {board.change === true && <div>
          <textarea className="form-control newcard" onChange={e => (card = e.currentTarget.value)} />
          <div>
            <button className="btn btn-lg btn-success button" onClick={() => {
                saveDataCardList(selectIdBoard, index, card);
              }}>
              Add
            </button>
            <button className="btn btn-lg btn-defaul button">Cancel</button>
          </div>
        </div>}
      {board.change === false && <button className="btn-link" onClick={() => {
            changeDataTrue(selectIdBoard, index);
          }}>
          Add a new card
        </button>}
    </div>;
};

const Detail = ({ boards, selectIdBoard, active, user }) => {
  let newList = "";
  return (
    <div>
      <NavBoard user={user} />
      <div className="listBox">
        <h3 className="titleBoard">{boards[selectIdBoard].title}</h3>
        {boards[selectIdBoard].noteList.map((item, index) => {
          return (
            <NoteList
              key={index}
              board={item}
              index={index}
              selectIdBoard={selectIdBoard}
              active={active}
            />
          );
        })}
        {active === false && (
          <div
            className="list"
            onClick={() => {
              changeTrue();
            }}
          >
            Add new list...
          </div>
        )}
        {active === true && (
          <div className="newList">
            <input
              placeholder="Add a new list..."
              className="form-control"
              onChange={e => {
                newList = e.currentTarget.value;
              }}
            />
            <button
              className="btn btn-success save"
              onClick={() => {
                saveDataLIst(selectIdBoard, newList);
              }}
            >
              Save list
            </button>
            <button className="btn btn-defaul remove">X</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
