import store from "../store/store";
import { auth, database, firebase } from "../firebase.js";

// actions para el login
export function addSignUp(firstname, lastname, email, password) {
  auth.createUserWithEmailAndPassword(email, password).then(userObj => {
    let newuser = {
      firstname,
      lastname,
      email
    };
    database.ref("users/" + userObj.uid).set(newuser);

    database
      .ref("users/" + userObj.uid)
      .once("value")
      .then(res => {
        const fullUserInfo = res.val();
        console.log("full info ", fullUserInfo);
        store.setState({
          user: {
            id: userObj.uid,
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
            id: userObj.uid,
            firstname: fullUserInfo.firstname,
            lastname: fullUserInfo.lastname,
            email: fullUserInfo.email
          }
        });
        console.log("salee", userObj.uid);
        readDataBoard();
      });
  });
}

export function signOut() {
  auth.signOut();
  store.setState({
    successLogin: false,
    user: {
      id: "",
      email: ""
    }
  });
}

auth.onAuthStateChanged(user => {
  // se llama cada ves q se hace login on crea como un timer al aver un cambio se llama de maera autonatica
  if (user) {
    console.log("user", user);
    let usersRef = database.ref("/users");
    let userRef = usersRef.child(user.uid);
    store.setState({
      successLogin: true
    });
  }
});
// fin de login //////

// añade boards
export const changeView = index => {
  store.setState({
    selectIdBoard: index
  });
};

export function changeTrue() {
  store.setState({
    active: true
  });
}

export const saveDataBoard = newBoard => {
  let newBoards = store.getState().boards;
  let ids;
  if (newBoards != undefined) {
    ids = newBoards.length;
  }
  const objetBoard = {
    id: ids,
    title: newBoard,
    noteList: [],
    change: false
  };
  store.setState({
    active: false
  });
  console.log(store.getState().user.id);
  database
    .ref("users/" + store.getState().user.id + "/boards/" + objetBoard.id)
    .set(objetBoard);
};

// mas actions
export const saveDataLIst = (selectIdBoard, newList) => {
  let newBoards = [...store.getState().boards];
  let ids = 0;
  if (newBoards != undefined) {
    ids = newBoards[selectIdBoard].noteList.length;
  }
  const noteLists = {
    id: ids,
    subtitle: newList,
    cards: [],
    change: false
  };
  //newBoards[selectIdBoard].noteList.push(noteLists);
  store.setState({
    active: false
  });
  database
    .ref(
      "users/" +
        store.getState().user.id +
        "/boards/" +
        newBoards[selectIdBoard].id +
        "/noteList/" +
        noteLists.id
    )
    .set(noteLists);
};

export const saveDataCardList = (selectIdBoard, index, card) => {
  let newBoards = [...store.getState().boards];

  newBoards[selectIdBoard].noteList[index].change = false;
  // store.setState({
  //   boards: newBoards
  // });
  database
    .ref(
      "users/" +
        store.getState().user.id +
        "/boards/" +
        newBoards[selectIdBoard].id +
        "/noteList/" +
        newBoards[selectIdBoard].noteList[index].id +
        "/cards/"
    )
    .push(card);
};

export const changeDataTrue = (selectIdBoard, index) => {
  let newBoards = [...store.getState().boards];
  newBoards[selectIdBoard].noteList[index].change = true;
  store.setState({
    boards: newBoards
  });
};

function readDataBoard() {
  database.ref("users/" + store.getState().user.id + "/boards/").on("value", res => {
      let arrBoard = [];
      res.forEach(snap => {
        const boardVal = snap.val();

        let arrList = [];
        database.ref("users/" + store.getState().user.id + "/boards/" + boardVal.id + "/noteList/").on("value", res => {
          res.forEach(snap => {
            const listVal = snap.val();
            console.log("sisalej..",listVal);
            let arrCard = [];
            database.ref("users/" + store.getState().user.id + "/boards/" + boardVal.id + "/noteList/" + listVal.id + "/cards/").on("value", res =>{
              
              res.forEach(snap => {
                const cardVal = snap.val();
                arrCard.push(cardVal);
              })
            })
            arrList.push({
              id: listVal.id,
              subtitle: listVal.subtitle,
              cards: arrCard,
              change: listVal.change
            })
          })
        })
        arrBoard.push({
          id: boardVal.id,
          title: boardVal.title,
          noteList: arrList,
          change: boardVal.change
        })

      });
      store.setState({
        boards: arrBoard
      });
    });
}
