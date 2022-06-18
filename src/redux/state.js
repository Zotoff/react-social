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
        console.log(this._state);
        console.log('state changed');
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 12
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     console.log('update post text');
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 12
            }
            console.log(newPost);
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
window.store = store;
export default store;
