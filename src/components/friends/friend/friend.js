import React from "react";
import s from './friend.module.css';

const Friend = (props) => {
    return (
        <div className={s.friend} key={props.id}>
            <div className={s.friend__avatar}>
                <img src={props.avatar} alt={props.name} className={props.avatar !== '' ? s.friend__withavatar : s.friend__noavatar}/>
            </div>
            <div className={s.friends__name}>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Friend;