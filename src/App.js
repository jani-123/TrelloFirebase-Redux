import React from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";
import Board from "./components/Board/Board.js";
import Detail from "./components/DetailBoard/DetailBoard.js";
import { connect } from "redux-zero/react";
import { HashRouter, Switch, Route } from "react-router-dom";

const TrelloApp = ({ successLogin , user , boards , active , selectIdBoard , activeCard}) => {
  return <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <SignIn successLogin={successLogin} />} />
        <Route path="/SignUp" render={() => <SignUp successLogin={successLogin} />} />
        <Route path="/Board" render={() => <Board successLogin={successLogin} user={user} boards={boards} active={active} />} />
        <Route path="/DetailBoard" render={() => <Detail successLogin={successLogin} user={user} boards={boards} active={active} selectIdBoard={selectIdBoard} activeCard={activeCard}/>} />
      </Switch>
    </HashRouter>;
};
const mapToProps = ({ successLogin , user , boards , active ,selectIdBoard , activeCard}) => ({successLogin, user, boards, active, selectIdBoard , activeCard});
export default connect(mapToProps)(TrelloApp);
