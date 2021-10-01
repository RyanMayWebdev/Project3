import sound from './correct.wav';
import useSound from 'use-sound';



const DisplayMessages = (props) => {
    const [play] = useSound(sound)
    play()
    return props.messages.map( (message, index) => <p key={index} className="message">{message} </p>)
  }

  export default DisplayMessages;