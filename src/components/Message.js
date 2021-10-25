import playSound from "../utilities/playSound";
import {ref, remove} from 'firebase/database';
import database from '../utilities/firebase';
import {useState} from "react";

const DisplayMessages = (props) => {
    const lastMessage = props.messages[props.messages.length - 1] //If latest message isn't from the user then play notification sound
    playSound(lastMessage, props.displayName)
    const [deleteConfirm,
        setDeleteConfirm] = useState('deleteConfirm hidden');
    const [messageID,
        setMessageID] = useState('');

    const deleteButton = (e) => {
        setDeleteConfirm('deleteConfirm');
        setMessageID(e.target.id)
    }

    const deleteHandler = (e, channel) => {
        setDeleteConfirm('deleteConfirm hidden');
        if (e.target.innerText === 'Yes') {
            const messagesRef = ref(database, `${channel}/${messageID}`); //set database reference to the selected chat channel
            remove(messagesRef);
        }

    };

    return ( 
    <> {
        props
            .messages
            .map((message) => {
                const messageClass = message.user === props.displayName //place users messages on the right
                    ? "message right"
                    : "message"
                return (
                    <div className={messageClass} key={message.id}>
                        {message.user === props.displayName
                            ? <button
                                    className="deleteButton"
                                    onClick={(e) => deleteButton(e)}
                                    id={message.id}>X</button>
                                    
                            : null
}
                        <h2>
                            {message.user}
                            <span>{message.time}</span>
                        </h2>

                        <div>
                            <p >{message.message}</p>
                        </div>

                    </div>
                )
            })
    } 
        <div className ={deleteConfirm}> 
            <p>Are you sure you want to delete this message?</p>
            <button onClick = {(e) => {deleteHandler(e, props.channel)}}>Yes</button>
            <button onClick={(e) => {deleteHandler(e, props.channel)}}>No</button> 
        </div> 
    </>
    )

};

export default DisplayMessages;