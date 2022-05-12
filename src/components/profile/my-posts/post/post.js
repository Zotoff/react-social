import React from "react";
import s from './post.module.css';

const Post = (props) => {
    return (
    <div className='post'>
        <div className={s.message}>
            {props.message} 
        </div>
        <div className={s.buttons}>
            <span>Like</span>
            <span>Dislike</span>
        </div>
        <div className={s.likesWrapper}>
            <p>{props.likes} likes</p>
        </div>
    </div>
    )
}

export default Post;