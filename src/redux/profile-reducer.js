const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12
            }
            // copy state to make pure function and to prevent change the initial state
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            // copy state to make pure function and to prevent change the initial state
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
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

export default profileReducer;