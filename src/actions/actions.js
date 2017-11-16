
import store from '../store/store'
//import firebase from "firebase";

// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCgwI7NBRYxV8goIh5rUpvY0JnMyH1XJhU",
//   authDomain: "trello-d02bd.firebaseapp.com",
//   databaseURL: "https://trello-d02bd.firebaseio.com",
//   projectId: "trello-d02bd",
//   storageBucket: "",
//   messagingSenderId: "345740503579"
// };
// firebase.initializeApp(config);

// // const snapshotToArray = snapshot => {
// //   let comments = [];
// //   snapshot.forEach(childSnapshot => {
// //     let item = childSnapshot.val();
// //     let key = childSnapshot.key;
// //     item.id = key;
// //     comments.push(item);
// //   });
// //   store.setState({ comments: comments });
// // };

// export const changeList = () => {
//   store.setState({
//     active: true
//   });
// };
// export const addTitleList= title => {
//   let boardNews = store.getState().listBoard;
//   const newBoard = boardNews.concat({
//     title: title,
//     list: [],
//   });
//   store.setState({
//     listBoard: newBoard,
//     active: false
//   });
// };
// export const changeVista = index => {
//   store.setState({
//     selectedListBoard: index
//   });
// };


// export const changeTextList = () => {
//   store.setState({
   
//     addActive: true
//   });
// };

// // export  async function addComments (name,comment) {
// //   const comments = [...store.getState().comments]
// //  const newcomment = {
// //     name: name,
// //     comment: comment
// //  };

// //  const res = await  firebase.database().ref('comentarios/').push (newcomment);
// //  newcomment.id = res.key;

// //  const newComment= comments.concat(newcomment);
// // store.setState({
// //   comments: newComment
// // })
// export const addNote = (textNote) => {
//   const note = [...store.getState().listBoard];
//   console.log(note)
//   //const arrList = note.map(e => e.list);
//   const newsNotes = note.concat({
//     list: [{text:textNote}]
//   }) 
//   store.setState({
//     listBoard: newsNotes,
//     addActive: false
//   })
//   console.log(store.getState().listBoard);

// }