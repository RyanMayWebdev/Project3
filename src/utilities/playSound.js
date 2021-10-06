import sound from '../sounds/notify.flac';

//Plays notify sound if latest message is from another user.
const playSound = (lastMessage, displayName) => {
    const audio = new Audio(sound)
    if (lastMessage.user !== displayName) {
        audio.play()
    }

}

export default playSound;