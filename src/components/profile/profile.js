import React from "react";
import MyPosts from "./my-posts/myposts";
import ProfileInfo from "./profileinfo/profileinfo";

const Profile = (props) => {
    return (
      <div className="content">
        <ProfileInfo />
        <MyPosts addPost={props.addPost} postsData={props.postsData} state={props.state} />
      </div>
    )
}

export default Profile;