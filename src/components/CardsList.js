import React, {useState} from 'react';
import Card from "./Card";
import "../styles/cardCont.css"
import Filters from "./Filters";

const CardList = (props) => {

    let sortedBooks = props.books;
    const [updateBooks, setUpdateBooks] = useState([]);

    const setFilterHandler = (filter) => {

        switch (filter) {
            case 'nameInc':

                sortedBooks = props.books.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                });
                break;

            case 'nameDec':
                sortedBooks = props.books.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                });
                break;
        }
        setUpdateBooks(sortedBooks);
    }

    return (
        <div className={"cardCont"}>
            <Filters setFilter={setFilterHandler}/>
            {sortedBooks.map(book =>
                <Card
                    title={book.title}
                    author={book.author}
                    // date={book.date}
                    rate={book.rate}
                    notes={book.notes}
                    key={book.title}
                ></Card>
            )}
        </div>
    );
}

export default CardList;
