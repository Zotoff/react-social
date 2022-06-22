import React from "react";
import MyPostsContainer from "./my-posts/myposts-container";
import ProfileInfo from "./profileinfo/profileinfo";

const Profile = (props) => {
    return (
      <div className="content">
        <ProfileInfo />
        <MyPostsContainer
          store={props.store}
        />
      </div>
    )
}

export default Profile;