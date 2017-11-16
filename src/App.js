import React from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";
import Board from "./components/Board/Board.js";
import Detail from "./components/DetailBoard/DetailBoard.js";
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from "react-router-dom";
/*import {
  changeList,
  addTitleList,
  changeVista,
  changeTextList,
  addNote
} from "./actions";
import { NavLink } from "react-router-dom";*/

const TrelloApp = ({ title }) => {
  console.log(title);
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <SignIn title={title}/>}/>
        <Route path="/SignUp" render={() => <SignUp title={title}/>}/>
        <Route path="/Board" render={() => <Board title={title} />}/>
        <Route path="/DetailBoard" render={() => <Detail title={title}/>}/>
      </Switch>
    </HashRouter>
  );
};
const mapToProps = ({ title }) => ({ title });
export default connect(mapToProps)(TrelloApp);
