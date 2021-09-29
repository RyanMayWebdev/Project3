import './App.css';
import ChatInput from './ChatInput';
import {useState} from 'react';
import DisplayMessages from './Message';

function App() {

    const [messages,
        setMessages] = useState([]);


    function handleSubmit(e, userInput, setUserInput){
        e.preventDefault();
        if (userInput) {
            const messageArray = messages;
            messageArray.push(userInput)
            setMessages([...messageArray]);
            setUserInput('');
        }
    }

    return (
        <div className="App">
            <h1>Welcome to Bubbles!</h1>
            <div className="messagesContainer">
                {messages.length > 0
                    ? <DisplayMessages messages={messages}/>
                    : null}
            </div>
            <div className="userMessageContainer">
            <ChatInput handleFunc={handleSubmit}/>
            </div>

        </div>
    );
}

export default App;
