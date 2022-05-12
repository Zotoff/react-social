let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Post 1', likesCount: 12},
            {id: 2, message: 'Post 2', likesCount: 12}
        ],
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
}

export default state;