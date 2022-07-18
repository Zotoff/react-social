import React from "react";
import s from './users.module.css';
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return <div className={s.users}>
                <h2>Users</h2>
                <div>
                    {pages.map(p => {
                       return <span href="#" className={props.currentPage === p && s.selectedPage} onClick={(e) => {props.onPageChanged(p)}}                      
                       >{p}</span>
                    })}
                </div>
                {props.users.map( u => <div key={u.id} className={s.users__block}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : "https://e7.pngegg.com/pngimages/524/597/png-clipart-exotel-cloud-communications-privacy-policy-interactive-voice-response-information-others-miscellaneous-blue.png"} alt={u.name}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed ? <button 
                                    onClick={() => {props.unfollow(u.id)}}
                                >Unfollow</button>
                                :
                                <button 
                                    onClick={() => {props.follow(u.id)}}
                                >Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>)}
            </div>
}
export default Users;