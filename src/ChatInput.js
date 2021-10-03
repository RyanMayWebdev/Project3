import { useState } from "react"
import InputEmoji from "react-input-emoji";


const ChatInput = (props) => {

    const [userInput, setUserInput] = useState('');

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