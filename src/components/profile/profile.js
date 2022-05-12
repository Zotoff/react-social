import React from "react";
import MyPosts from "./my-posts/myposts";
import ProfileInfo from "./profileinfo/profileinfo";

const Profile = (props) => {
    return (
      <div className="content">
        <ProfileInfo />
        <MyPosts postsData = {props.postsData} />
      </div>
    )
}

export default Profile;