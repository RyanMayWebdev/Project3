import { useState } from "react"
import InputEmoji from "react-input-emoji"; //emoji picker package


const ChatInput = (props) => {

    const [userInput, setUserInput] = useState('');

    //Check if user has pressed enter to submit and allow shift enter to start a new line.
    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            props.handleFunc(e,userInput,setUserInput)
        }
    }

    return(
        <> 
            <form id="chatInputForm">
                <label htmlFor="chatInput" className="sr-only">Message:</label>
                <InputEmoji value={userInput} onChange={ setUserInput } onKeyDown={ handleKeyDown }  name="chatInput" id="chatInput" placeholder="Write your message here..." />
            </form>
        </>
    )
}

export default ChatInput;