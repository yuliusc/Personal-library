import React, {useState} from 'react';
import Card from "./Card";
import "../styles/cardCont.css"
import Filters from "./Filters";

const CardList = (props) => {

    let sortedBooks = props.books;
    const [updateBooks, setUpdateBooks] = useState([]);
    const [updateFilter, setUpdateFilter] = useState('');

    const setFilterHandler = (filter) => {

        setUpdateFilter(filter)

        switch (filter) {
            case 'nameInc':
                sortedBooks = props.books.sort((a, b) => {
                    return b.title.localeCompare(a.title)
                });
                break;

            case 'nameDec':
                sortedBooks = props.books.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                });
                break;

            case 'authorInc':
                sortedBooks = props.books.sort((a, b) => {
                    return b.author.localeCompare(a.author)
                });
                break;

            case 'authorDec':
                sortedBooks = props.books.sort((a, b) => {
                    return a.author.localeCompare(b.author)
                });
                break;

            case 'rateInc':
                sortedBooks = props.books.sort((a, b) => {
                    return a.rate - b.rate
                });
                break;

            case 'rateDec':
                sortedBooks = props.books.sort((a, b) => {
                    return b.rate - a.rate
                });
                break;
            default:
                break;
        }
        setUpdateBooks(sortedBooks);
    }

    const deleteCard = (bookName) => {
        props.deleteCard(bookName);
    }

    return (
        <div className={"cardCont"}>
            <Filters setFilter={setFilterHandler}/>
            {sortedBooks.map(book =>
                <Card
                    title={book.title}
                    author={book.author}
                    date={book.date.toString()}
                    rate={book.rate}
                    notes={book.notes}
                    key={book.title}
                    deleteCard={deleteCard}
                ></Card>
            )}
        </div>
    );
}

export default CardList;
