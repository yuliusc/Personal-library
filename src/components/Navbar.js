import React, {Component} from 'react';
import '../styles/navbar.css'

const Navbar = (props) => {
    return (
        <div className={"navbar"}>
            <h1 className={"navbar__text"}>Recently read books </h1>
            <div className={"navbar__buttons"}>
                <button onClick={props.deleteAllBooks} className={"navbar__clear customButton"}>Clear book set</button>
                <button onClick={props.showAddBookForm} className={"navbar__add customButton"}>Add your book</button>
            </div>
        </div>
    );
}

export default Navbar;
