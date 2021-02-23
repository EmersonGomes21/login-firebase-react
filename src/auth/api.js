import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './config';

const firebaseApp = firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  googleLogar: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let result = await firebase.auth().signInWithPopup(provider);
    console.log('googleLogar', result);
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
   var res =  new firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('Logado com sucesso',  user);
         res = user.emailVerified
        return res ;
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      //  console.log('erro', errorCode, errorMessage);
     res = errorCode + errorMessage 
        return res ;
      });
     
      return res;
   
  },

  signOut: async () =>{
    new firebase.auth().signOut().then(() => {
      return true;
    }).catch((error) => {
      return false;
    });
    
  }
};