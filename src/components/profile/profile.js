import React from "react";
import MyPosts from "./my-posts/myposts";
import ProfileInfo from "./profileinfo/profileinfo";

const Profile = (props) => {
    return (
      <div className="content">
        <ProfileInfo />
        <MyPosts 
          dispatch={props.dispatch} 
          newPostText={props.profilePage.newPostText} 
          posts={props.profilePage.posts} 
        />
      </div>
    )
}

export default Profile;