import sound from '../sounds/notify.flac';
import useSound from 'use-sound';

const DisplayMessages = (props) => {
    const [play] = useSound(sound)
    play()

    return props
        .messages
        .map((message) => {
            const messageClass =  message.user === props.displayName ? "message right" : "message"
            return (
                <div className={messageClass} key={message.id}>
                    <p >{message.message}</p>
                    <div>
                        <p> by {message.user} @ {message.time} </p>
                    </div>
                </div>
            )
        })
}

export default DisplayMessages;