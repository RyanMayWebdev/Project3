import { useState } from "react"


const ChatInput = (props) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value);

    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault()
            props.handleFunc(e,userInput,setUserInput)
        }
    }

    return(
        <> 
            <form id="chatInputForm">
                <label htmlFor="chatInput">Message:</label>
                <textarea onKeyDown={ handleKeyDown } onChange={ handleChange }  name="chatInput" id="chatInput" placeholder="Write your message here..." value={userInput}></textarea>
            </form>
        </>
    )
}

export default ChatInput;