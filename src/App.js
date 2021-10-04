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
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
            const newMessageObj = {
                message: message,
                time : `${date.toLocaleTimeString()}  ${date.toLocaleDateString(undefined, options)}`,
                user: displayName
            };
            const dbRef = ref(database,'messages')
            push(dbRef, newMessageObj);
            setUserInput('');
        };
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
        <Header handleLoginState={ loginStatus } loggedIn={loggedIn} />
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
