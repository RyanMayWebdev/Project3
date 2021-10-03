import sound from './correct.wav';
import useSound from 'use-sound';

const DisplayMessages = (props) => {
    const [play] = useSound(sound)
    play()
    return props
        .messages
        .map((message) => {
            return (
                <div className="message" key={message.id}>
                    <p >{message.message}</p>
                    <div>
                        <p> by {message.user} @ {message.time} </p>
                    </div>
                </div>
            )
        })
}

export default DisplayMessages;