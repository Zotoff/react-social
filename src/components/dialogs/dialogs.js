import React from "react";
import s from './dialogs.module.css';
import Message from "./message/message";
import DialogItem from "./dialogitem/dialogItem";

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messages-reducer';


const Dialogs = (props) => {

    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />)
    let messageElements = state.messages.map(message => <Message message={message.message} key={message.id} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;