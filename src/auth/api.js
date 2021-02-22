import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();

export default {
  googleLogar: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    return result;
  },

  // emailSenhaCreate: async (email, password) => {
  //   const provider = new firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       // Signed in
  //       // ...
  //     })
  //     .catch((error) => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // ..
  //     });
  // },

  emailSenhaLogar: async (email, password) => {

    let result = new firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Logado com sucesso', result);
        return result = true;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('erro', errorCode, errorMessage);
        return result = false;
      });

    return result;
  }


};