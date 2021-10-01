import './App.css';
import ChatInput from './ChatInput';
import {useEffect,useState} from 'react';
import DisplayMessages from './Message';
import database from './firebase';
import {ref, onValue, update } from 'firebase/database';


const App = () => {
    const [messages,
        setMessages] = useState([]); 



    const handleSubmit = (e, userInput, setUserInput) => {
        e.preventDefault();
        if (userInput) {
            const date = new Date();
            userInput += `   ${date.toLocaleTimeString()}`
            const messageArr = messages
            messageArr.push(userInput)
            const postTo = {}
            postTo['messages/message'] = messageArr;
            update(ref(database), postTo)
            setUserInput('');
        } 
    }


     useEffect(()=> {
        const messagesRef = ref(database,'messages/message');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            setMessages(data)
        })
     },[])


 


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
