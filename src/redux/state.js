import friendsReducer from './friends-reducer';
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Post 1', likesCount: 12},
                {id: 2, message: 'Post 2', likesCount: 12}
            ],
            newPostText: '',
            dialogs: [
                {id: 1, name: 'Pavel'},
                {id: 2, name: 'Maria'},
                {id: 3, name: 'Ivan'}
            ]
        },
        messagesPage: {
            dialogs: [
              {id: 1, name: 'Pavel'},
              {id: 2, name: 'Maria'}  
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'}
            ],
            newMessageBody: ""
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Pavel', avatar: ''},
                {id: 2, name: 'Masha', avatar: ''},
                {id: 3, name: 'Margarita', avatar: ''}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        messagesReducer(this._state.messagesPage, action);
        friendsReducer(this._state, action);
        this._callSubscriber(this._state);
    }
}



window.store = store;
export default store;
