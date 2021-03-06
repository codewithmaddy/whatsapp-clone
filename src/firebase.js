import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA_bf0B4rsPvcrM055fJ4UEayqMtwxnlLc",
    authDomain: "whatsapp-cwm.firebaseapp.com",
    projectId: "whatsapp-cwm",
    storageBucket: "whatsapp-cwm.appspot.com",
    messagingSenderId: "69087185194",
    appId: "1:69087185194:web:a849a4adbc6c4cc038f653",
    measurementId: "G-HV0DQTLHJD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;