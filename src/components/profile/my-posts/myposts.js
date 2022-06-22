import React from "react";
import Post from "./post/post";


const MyPosts = (props) => {
    let postsElements = props.postsElements.map(posts => <Post message={posts.message} key={posts.id} likes={posts.likesCount} />)

    let newPostElement = React.createRef();    

    let onAddPost = function () {
        props.addPost();
    }

    let onPostChange = () => {
        let changedText = newPostElement.current.value;
        props.updateNewPostText(changedText);
    }

    return <div>
        <h2>My Posts</h2>
        <hr />
        <div>
            <textarea 
                ref={newPostElement} 
                onChange={onPostChange} 
                value={props.newPostText} 
            />
            <button onClick={onAddPost}>Add Post</button>
        </div>
        <div className="posts">
            {postsElements}
        </div>
    </div>
}

export default MyPosts;