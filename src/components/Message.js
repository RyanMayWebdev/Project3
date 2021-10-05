import playSound from "../utilities/playSound"

const DisplayMessages = (props) => {
    const lastMessage = props.messages[props.messages.length -1 ]
    playSound(lastMessage, props.displayName)
    return props
        .messages
        .map((message) => {
            const messageClass = message.user === props.displayName
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