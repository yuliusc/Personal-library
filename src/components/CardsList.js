import React from 'react';
import Card from "./Card";
import "../styles/cardCont.css"

const CardList = (props) => {

    return (
        <div className={"cardCont"}>
            {props.books.map(book =>
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
