import './styles/App.css';
import ChatInput from './components/ChatInput';
import {useEffect,useState} from 'react';
import DisplayMessages from './components/Message';
import database from './utilities/firebase';
import Header from './components/Header';
import {ref, onValue, push } from 'firebase/database';
import LoginForm from './components/LoginForm';
import Filter  from 'bad-words';

const App = () => {
    const [messages,
        setMessages] = useState([]); 

    const [loggedIn, setLoggedIn] = useState(false);
    const [displayName, setDisplayName] = useState('');
    const [channel,setChannel] = useState('general');

    const changeChannel = (channelChoice) => {
        setChannel(channelChoice);
    }

    const loginStatus = (status) => {
        setLoggedIn(status);
    }

    const getDisplayName = (userDisplayName) => {
        setDisplayName(userDisplayName);
    }

    const handleSubmit = (e, userInput, setUserInput) => {
        e.preventDefault();
        if (userInput) {
            let message = userInput;
            if (/\P{Extended_Pictographic}/u.test(userInput)) {
                const filter = new Filter();
                message = filter.clean(userInput);
            }
            const date = new Date();
            const newMessageObj = {
                message: message,
                time : date.toLocaleTimeString(),
                user: displayName
            };
            const dbRef = ref(database,`${channel}`)
            push(dbRef, newMessageObj);
            setUserInput('');
        };
    };

     useEffect(()=> {
        const messagesRef = ref(database,`${channel}`);
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
     },[channel]);

    return (
        <div className="App">
        <Header handleLoginState={ loginStatus } loggedIn={loggedIn} changeChannel={changeChannel} />
        {
            !loggedIn ? <LoginForm handleLoginState={ loginStatus } getDisplayName={getDisplayName} /> :
        
           (
            <>
                <div className="messagesContainer">
                    {messages.length > 0 ? <DisplayMessages messages={messages} displayName={displayName} /> : null}

                 </div>
                <div className="userMessageContainer">
                    <ChatInput handleFunc={handleSubmit}/>
                </div>
            </>

           )
        }
        </div>
    );
}

export default App;
