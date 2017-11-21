import React from "react";
import {
  signOut,
  changeTrue,
  saveDataCardList,
  saveDataLIst,
  changeDataTrue
} from "../../actions/actions";
import "./DetailBoard.css";
import trello from "../../trello-logo.png";
import {Redirect } from "react-router-dom";
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

const NoteList = ({ noteList, index, selectIdBoard, active }) => {
  let card = "";
  return (
    <div key={index} className="container noteList">
      <p>{noteList.subtitle}</p>
      {noteList.cards.map((value, i) => {
        return (
          <div key={i} className="listCards">
            <p>{value}</p>
          </div>
        );
      })}
      {noteList.change ? (
        <div>
          <textarea
            className="form-control"
            onChange={e => (card = e.currentTarget.value)}
          />
          <div>
            <button
              className="btn btn-lg btn-success button"
              onClick={() => {
                saveDataCardList(selectIdBoard, index, card);
              }}
            >
              Add
            </button>
            <button className="btn btn-lg btn-defaul button">Cancel</button>
          </div>
        </div>
      ) : (
        <div
          className="addCards"
          onClick={() => {
            changeDataTrue(selectIdBoard, index);
          }}
        >
          Add a new card
        </div>
      )}
    </div>
  );
};

const Detail = ({successLogin, boards, selectIdBoard, active, user }) => {
  let newList = "";
  return (
    <div>
    {!successLogin && <Redirect to="/" />}
      <NavBoard user={user} />
      <div className="listBox">
        <h3 className="titleBoard">{boards[selectIdBoard].title}</h3>
        {boards[selectIdBoard].noteList.map((item, index) => {
          return (
            <NoteList
              key={index}
              noteList={item}
              index={index}
              selectIdBoard={selectIdBoard}
              active={active}
            />
          );
        })}
        {active ? (
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
        ) : (
          <div
            className="list"
            onClick={() => {
              changeTrue();
            }}
          >
            Add new list...
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
