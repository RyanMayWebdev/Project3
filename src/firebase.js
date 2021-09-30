import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, update } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDW_x2qs4FYNnQyLKuN5YYNmy-mjJBOZVc",
    authDomain: "chatapp-5c0ff.firebaseapp.com",
    databaseURL: "https://chatapp-5c0ff-default-rtdb.firebaseio.com",
    projectId: "chatapp-5c0ff",
    storageBucket: "chatapp-5c0ff.appspot.com",
    messagingSenderId: "376162523347",
    appId: "1:376162523347:web:e7b8b9d82d6729fc111c26"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messagesRef = ref(database,'messages/message');

const readDatabase = (callback) => {
    onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    })
}


const writeDatabase = (message) => {
    const postTo = {}
    postTo['messages/message'] = message;
    update(ref(database), postTo)
};

  
    export { readDatabase, writeDatabase };
 