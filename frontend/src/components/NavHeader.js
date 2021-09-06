import React from "react";

const NavHeader = (props) => {
    return (
        <header className="nav-header">
            <h1>{props.title}</h1>
            <div>
                <ul><a href="/movies"> Home </a></ul>
                <ul><a href="/movies/new"> Add Movie </a></ul>
            </div>
        </header>
    )
}

export default NavHeader;