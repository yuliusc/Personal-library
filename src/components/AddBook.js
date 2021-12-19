import React from 'react';
import '../styles/addBook.css'

const AddBook = (props) => {

    const addUserHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className={"addBook"}>
            <form onSubmit={addUserHandler}>
                <input type="text" id="bookName" placeholder={"Book name"} className={"addBook__name"}></input>
                <input type="text" id="bookAuthor" placeholder={"Book author"} className={"addBook__author"}></input>
                <input type="text" id="bookNotes" placeholder={"Notes"} className={"addBook__notes"}></input>
            </form>
        </div>
    )

}

export default AddBook;
