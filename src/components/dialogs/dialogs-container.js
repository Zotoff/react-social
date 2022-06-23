import React from "react";
import s from './dialogs.module.css';
import Message from "./message/message";
import DialogItem from "./dialogitem/dialogItem";
import Dialogs from "./dialogs";

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messages-reducer';


const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs 
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
            dialogsElements={state.dialogs}
            messageElements={state.messages}
            newMessageBody={state.newMessageBody}
        />
    )
}

export default DialogsContainer;