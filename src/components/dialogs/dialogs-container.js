import React from "react";
// import Message from "./message/message";
// import DialogItem from "./dialogitem/dialogItem";
import Dialogs from "./dialogs";

import { connect } from "react-redux";

import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/messages-reducer';


// const DialogsContainer = (props) => {

//     let state = props.store.getState().messagesPage;

//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator());
//     }
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body));
//     }

//     return (
//         <Dialogs 
//             onSendMessageClick={onSendMessageClick}
//             onNewMessageChange={onNewMessageChange}
//             dialogsElements={state.dialogs}
//             messageElements={state.messages}
//             newMessageBody={state.newMessageBody}
//         />
//     )
// }


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;