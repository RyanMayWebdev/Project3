import playSound from "../utilities/playSound"

const DisplayMessages = (props) => {
    const lastMessage = props.messages[props.messages.length -1 ] //If latest message isn't from the user then play notification sound
    playSound(lastMessage, props.displayName)
    return props
        .messages
        .map((message) => {
            const messageClass = message.user === props.displayName //place users messages on the right
                ? "message right"
                : "message"
            return (
                <div className={messageClass} key={message.id}>
                    <p >{message.message}</p>
                    <div>
                        <p>
                            by {message.user}
                            @ {message.time}
                        </p>
                    </div>
                </div>
            )
        })
}

export default DisplayMessages;