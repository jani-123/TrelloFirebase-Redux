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

const TrelloApp = ({ successLogin , user }) => {
  
  return <HashRouter>
      <Switch>
        <Route exact path="/SignIn" render={() => <SignIn successLogin={successLogin} />} />
        <Route path="/SignUp" render={() => <SignUp successLogin={successLogin} />} />
        <Route path="/Board" render={() => <Board successLogin={successLogin} user={user} />} />
        <Route path="/DetailBoard" render={() => <Detail title={"hello Word"} />} />
      </Switch>
    </HashRouter>;
};
const mapToProps = ({ successLogin , user }) => ({ successLogin , user });
export default connect(mapToProps)(TrelloApp);
