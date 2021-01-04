import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDwF-jZtFPHL8ui9nzdTGxmltHQbygaVzU",
    authDomain: "chatapp-85fa6.firebaseapp.com",
    databaseURL: "https://chatapp-85fa6-default-rtdb.firebaseio.com/"
    

};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();