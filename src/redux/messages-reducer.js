const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
      {id: 1, name: 'Pavel'},
      {id: 2, name: 'Maria'}  
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'}
    ],
    newMessageBody: ""
}

const messagesReducer = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            // copy the state and update the copy for immutability
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export default messagesReducer;