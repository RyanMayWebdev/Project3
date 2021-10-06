import './styles/App.css';
import ChatInput from './components/ChatInput';
import {useEffect,useState} from 'react';
import DisplayMessages from './components/Message';
import database from './utilities/firebase';
import Header from './components/Header';
import {ref, onValue, push } from 'firebase/database';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import Filter  from 'bad-words'; //Profanity filter package

const App = () => {
    const date = new Date();
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

    //Grab user input, filter for profanity if needed, push to database. Passed as a func to ChatInput component.
    const handleSubmit = (e, userInput, setUserInput) => {
        e.preventDefault();
        if (userInput) {
            let message = userInput;
            if (/\P{Extended_Pictographic}/u.test(userInput)) { //Checks if user input was only an emoji so profanity filter doesnt run as it'll break it
                const filter = new Filter();
                message = filter.clean(userInput);
            }
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
            const newMessageObj = {
                message: message,
                time : `${date.toLocaleTimeString()}  ${date.toLocaleDateString(undefined, options)}`,
                user: displayName
            };
            const dbRef = ref(database,`${channel}`)
            push(dbRef, newMessageObj);
            setUserInput('');
        };
    };

    //Grab data from database based on chat channel selected
     useEffect(()=> {
        const messagesRef = ref(database,`${channel}`); //set database reference to the selected chat channel
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
                !loggedIn ? <LoginForm handleLoginState={ loginStatus } getDisplayName={getDisplayName} /> : //display login page or chat page depending on whether user is logged in or not.
        
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

            <Footer year={date.getFullYear()} />
        </div>
    );
}

export default App;
