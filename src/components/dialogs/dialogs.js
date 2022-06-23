import React from "react";
import s from './dialogs.module.css';
import Message from "./message/message";
import DialogItem from "./dialogitem/dialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsElements.map(dialog => <DialogItem name={dialog.name} key={dialog.id} />)
    let messageElements =props.messageElements.map(message => <Message message={message.message} key={message.id} />)
    let newMessageBody = props.newMessageBody;

    let sendMessageClick = () => {
        props.onSendMessageClick();
    }
    let newMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body);
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
                        onChange={newMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={sendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;