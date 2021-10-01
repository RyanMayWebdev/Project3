import './App.css';
import ChatInput from './ChatInput';
import {useEffect,useState} from 'react';
import DisplayMessages from './Message';
import database from './firebase';
import {ref, onValue, update, push, child } from 'firebase/database';


const App = () => {
    const [messages,
        setMessages] = useState([]); 



    const handleSubmit = (e, userInput, setUserInput) => {
        e.preventDefault();
        if (userInput) {
            const newKey = push(child(ref(database),'messages')).key;
            const date = new Date();
            const newMessageObj = {
                message: userInput,
                time : date.toLocaleTimeString(),
                user: "placeholder"
        };
            const updates = {};
            updates['/messages/' + newKey ] = newMessageObj;
            update(ref(database), updates);
            setUserInput('');
        } ;
    };


     useEffect(()=> {
        const messagesRef = ref(database,'messages');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const messageArr = [];
            for (const key in data) {
                const messageObj = {
                    id: key,
                    message: data[key].message,
                    time: data[key].time,
                    user: data[key].user

                };
                messageArr.push(messageObj);
            }
            setMessages(messageArr);

        });
     },[]);


 


    return (
        <div className="App">
            <h1>Welcome to Bubbles!</h1>
            <div className="messagesContainer">
            {messages.length > 0 ? <DisplayMessages messages={messages}/> : null}

            </div>
            <div className="userMessageContainer">
            <ChatInput handleFunc={handleSubmit}/>
            </div>

        </div>
    );
}

export default App;
