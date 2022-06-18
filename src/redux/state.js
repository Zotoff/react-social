const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'}
            ]
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 12
            }
            console.log(newPost);
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

window.store = store;
export default store;
