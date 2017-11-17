import createStore from "redux-zero";

const initialState = {
  successLogin : false,
   user : {
      id : null,
      firstname : null,
      lastname: null,
      email :  null          
   }  
};

const store = createStore(initialState);

export default store;