import React from "react";
import MyPosts from "./myposts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import {connect} from 'react-redux';


// const MyPostsContainer = (props) => {

//     let state = props.store.getState();

//     let validatePostText = function () {
//         props.store.dispatch(addPostActionCreator());
//     }

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }

//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={validatePostText}
//             newPostText={state.profilePage.newPostText}
//             postsElements={state.profilePage.posts}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;