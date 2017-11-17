import store from "../store/store";
import { auth, database } from "../firebase.js";

export function addSignUp(firstname, lastname, email, password) {
  auth.createUserWithEmailAndPassword(email, password).then(user => {
    let newuser = {
      firstname,
      lastname,
      email
    };
    database.ref("users/" + user.uid).set(newuser);

    database
      .ref("users/" + user.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();
        console.log("full info ", fullUserInfo);
        store.setState({
          user: {
            id: user.uid,
            firstname: fullUserInfo.firstname,
            lastname: fullUserInfo.lastname,
            email: fullUserInfo.email
          }
        });
      });
  });
}

export function addSignIn(user, pass) {
  auth.signInWithEmailAndPassword(user, pass).then(userObj => {
    database
      .ref("users/" + userObj.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();

        console.log("full info ", fullUserInfo);
        store.setState({
          user: {
            id: user.uid,
            firstname: fullUserInfo.firstname,
            lastname: fullUserInfo.lastname,
            email: fullUserInfo.email
          }
        });
      });
  });
}

export function signOut () {
   auth.signOut();
   store.setState ( {
      successLogin : false,
      user: {
         id :'',
         email :  ''
      }
   })
}

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("user", user);
    let usersRef = database.ref("/users");
    let userRef = usersRef.child(user.uid);
    store.setState({
      successLogin: true
    });
  }
});
