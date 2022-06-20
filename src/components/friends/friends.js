import React from "react";
import Friend from "./friend/friend";

import s from './friends.module.css';

const Friends = (props) => {
    let friendsList = props.friendsList.friendsPage.map( friend => <Friend name={friend.name} avatar={friend.avatar} key={friend.id} />)
    return (
        <div className={s.friends}>
            <h2>Friends</h2>
            {friendsList}
        </div>
    )
}
export default Friends;