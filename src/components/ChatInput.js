import {useState} from "react"
import Picker from 'emoji-picker-react';

const ChatInput = (props) => {

    const [userInput,
        setUserInput] = useState('');
    const [toggleShow,
        setToggleShow] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        const input = userInput + emojiObject.emoji;
        setUserInput(input)
    };

    // Check if user has pressed enter to submit and allow shift enter to start a
    // new line.
    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            props.handleFunc(e, userInput, setUserInput)
        }
    }

    let emojiShow = toggleShow
        ? "visible"
        : "hidden"

    return ( 
    <> 
    <form onSubmit={(e) => props.handleFunc(e, userInput, setUserInput)} id="chatInputForm" className="chatForm">
        <label htmlFor="chatInput" className="sr-only">Message:</label>
        <button className="emojiButton" type="button" onClick={() => setToggleShow(!toggleShow)}><i className="fas fa-smile-beam"><p className="srOnly">Emojis</p></i></button>
        <div className={emojiShow}><Picker onEmojiClick={onEmojiClick}/></div>
        <div className="userInput">
            <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                name="chatInput"
                id="chatInput"
                placeholder="Write your message here..."/>
            <button type="submit" className="sendButton"><i className="fas fa-paper-plane"></i><p className="srOnly">Send</p></button>
        </div>
    </form> 
    </>
    )
}

export default ChatInput;