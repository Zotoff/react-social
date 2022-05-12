import React from "react";
import Post from "./post/post";

const MyPosts = (props) => {

    let postsElements = props.postsData.map(posts => <Post message={posts.message} key={posts.id} likes={posts.likesCount} />)

    return <div>
        <h2>My Posts</h2>
        <hr />
        <div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        <div className="posts">
            {postsElements}
        </div>
    </div>
}

export default MyPosts;