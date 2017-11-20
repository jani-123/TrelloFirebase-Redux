import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrelloApp from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
//import { HashRouter, Switch, Route } from 'react-router-dom';
import store from './store/store';
//import {readDataBoard} from './actions/actions'

const Index = () => (
  <Provider store={store}> 
    <TrelloApp />
  </Provider>
);
  

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

