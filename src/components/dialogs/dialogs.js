import React from "react";
import s from './dialogs.module.css';
import Message from "./message/message";
import DialogItem from "./dialogitem/dialogItem";

const Dialogs = (props) => {


    let dialogsElements = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messageElements = props.messagesData.map(message => <Message message={message.message} id={message.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;