let initialState = {
    friendsPage: [
        {id: 1, name: 'Pavel', avatar: ''},
        {id: 2, name: 'Masha', avatar: ''},
        {id: 3, name: 'Margarita', avatar: ''}
    ]
}

const friendsReducer = (state=initialState, action) => {
    return state;
}

export default friendsReducer;