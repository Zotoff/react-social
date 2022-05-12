import React from "react";

const Header = (props) => {
    return <header className="header">
        <a href="/">
            <img src={props.logo} alt="logo"/>
        </a>
  </header>
}

export default Header;