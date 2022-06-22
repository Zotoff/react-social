import React from "react";
import MyPosts from "./myposts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let validatePostText = function () {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={validatePostText}
            newPostText={state.profilePage.newPostText}
            postsElements={state.profilePage.posts}
        />
    )
}

export default MyPostsContainer;