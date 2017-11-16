import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrelloApp from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
//import { HashRouter, Switch, Route } from 'react-router-dom';
import store from './store/store';
//import {readBoard} from './actions/actions'

const Index = () => (
  <Provider store={store}>
    <TrelloApp />
  </Provider>
);
//readBoard();

// const Index = () => (
//   <Provider store={store}>
//     <HashRouter>
//       <Switch>
//         <Route exact path="/" component={SignIn} />
//       </Switch>
//     </HashRouter>
//   </Provider>
// );

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

