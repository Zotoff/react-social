import React from "react";
import Post from "./post/post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(posts => <Post message={posts.message} key={posts.id} likes={posts.likesCount} />)

    let newPostElement = React.createRef();

    let validatePostText = function () {
        let newPostText = newPostElement.current.value;
        props.addPost(newPostText, props.state);
    }

    return <div>
        <h2>My Posts</h2>
        <hr />
        <div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={validatePostText}>Add Post</button>
        </div>
        <div className="posts">
            {postsElements}
        </div>
    </div>
}

export default MyPosts;