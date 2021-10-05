import sound from '../sounds/notify.flac';

const playSound = (lastMessage, displayName) => {
    const audio = new Audio(sound)
    if (lastMessage.user !== displayName) {
        audio.play()
    }

}

export default playSound;