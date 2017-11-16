import createStore from "redux-zero";

//const LISTCOMMENT = [];

const initialState = {
  title: "hola mundo"
	//listBoard: LISTCOMMENT,
  // selectedListBoard: 0,
  // active: false,
  // addActive:false
};

const store = createStore(initialState);

export default store;