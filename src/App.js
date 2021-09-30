import './App.css';
import ChatInput from './ChatInput';
import {useEffect,useState} from 'react';
import DisplayMessages from './Message';
import { readDatabase, writeDatabase } from './firebase';


const App = () => {
    const [messages,
        setMessages] = useState([]); 

    const handleSubmit = (e, userInput, setUserInput) => {
        e.preventDefault();
        if (userInput) {
            const messageArr = messages
            messageArr.push(userInput)
            writeDatabase(messageArr);
            setUserInput('');
        }
    }

    const getMessages = (data) => {
        setMessages(data)
    }

    
     useEffect(()=> {
        readDatabase(getMessages)
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
