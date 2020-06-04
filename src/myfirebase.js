import firebase from "firebase/app";

var config = {
  "apiKey":"AIzaSyCWHV-59Nzhr050jL_Uk0kDQU56hmYRLS8",
  "authDomain":"vsamaru.firebaseapp.com",
  "databaseURL":"https://vsamaru.firebaseio.com",
  "projectId":"vsamaru",
  "storageBucket":"vsamaru.appspot.com",
  "messagingSenderId":"685290667281",
  "appId":"1:685290667281:web:469d5dd61070d5404460b0",
  "measurementId":"G-86X0K1BHN5"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
