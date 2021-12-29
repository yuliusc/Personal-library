import React, {useState} from 'react';
import '../styles/addBook.css'

const AddBook = (props) => {

    const [bookName, setbookName] = useState('');
    const [bookAuthor, setbookAuthor] = useState('');
    const [bookRate, setbookRate] = useState('');
    const [bookNotes, setbookNotes] = useState('');

    const addBookHandler = (e) => {
        e.preventDefault();

        if (+bookRate < 0 || +bookRate > 5 || bookRate.length === 0 || bookName.trim().length === 0) {
            return;
        }
        
        props.onAddBook(bookName, bookAuthor, bookRate, bookNotes);
        setbookName('');
        setbookAuthor('');
        setbookRate('');
        setbookNotes('');
    }

    const bookNameChange = (e) => {
        setbookName(e.target.value)
    }
    const bookAuthorChange = (e) => {
        setbookAuthor(e.target.value)
    }
    const bookRateChange = (e) => {
        setbookRate(e.target.value)
    }
    const bookNotesChange = (e) => {
        setbookNotes(e.target.value)
    }

    return (
        <div className={"addBook"}>
            <form onSubmit={addBookHandler}>
                <input type="text" id="bookName" placeholder={"Book name"} className={"addBook__name"}
                       onChange={bookNameChange} value={bookName}></input>
                <input type="text" id="bookAuthor" placeholder={"Book author"} className={"addBook__author"}
                       onChange={bookAuthorChange} value={bookAuthor}></input>
                <input type="number" id="bookRate" placeholder={"Book rate"} className={"addBook__rate"}
                       onChange={bookRateChange} value={bookRate}></input>
                <input type="text" id="bookNotes" placeholder={"Notes"} className={"addBook__notes"}
                       onChange={bookNotesChange} value={bookNotes}></input>
                <button type="submit">Add book</button>
            </form>
        </div>
    )

}

export default AddBook;
