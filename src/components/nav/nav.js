import React from "react";
import { NavLink } from "react-router-dom";
import s from "./nav.module.css";

const Nav = () => {
    return <nav className={s.nav}>
    <ul>
      <li className={s.item}><NavLink to="/profile" className={({isActive}) => (isActive ? s.linkActive : s.link)}>Profile</NavLink></li>
      <li className={s.item} ><NavLink to="/dialogs" className={({isActive}) => (isActive ? s.linkActive : s.link)}>Messages</NavLink></li>
      <li className={s.item} ><NavLink to="/news" className={({isActive}) => (isActive ? s.linkActive : s.link)}>News</NavLink></li>
      <li className={s.item} ><NavLink to="/music" className={({isActive}) => (isActive ? s.linkActive : s.link)}>Music</NavLink></li>
      <li className={s.item} ><NavLink to="/settings" className={({isActive}) => (isActive ? s.linkActive : s.link)}>Settings</NavLink></li>
    </ul>
  </nav>
}

export default Nav;