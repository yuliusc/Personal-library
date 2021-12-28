import React from 'react';
import Card from "./Card";
import "../styles/cardCont.css"

const CardList = (props) => {
    const books = [
        {
            title: " Don Quixotex",
            author: "Miguel de Cervantes",
            date: new Date(2021, 2, 14).toString(),
            rate: 3,
            notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
        },
        {
            title: " One Hundred Years of Solitude",
            author: "Gabriel Garcia Marquez",
            date: new Date(2021, 3, 22).toString(),
            rate: 6,
            notes: "eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa q"
        },
        {
            title: " The Great Gatsby",
            author: "F. Scott Fitzgerald",
            date: new Date(2021, 4, 29).toString(),
            rate: 7,
            notes: "Bibendum neque egestas congue quisque egestas diam in arcu. In fermentum posuere urna nec. Arcu dui vivamus arcu felis bibendum ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Egestas sed tempus urna et. Viverra adipiscing at in tellus integer. Adipiscing commodo elit at imperdiet dui accumsan sit. Suscipit tellus mauris a diam maecenas sed. Platea dictumst vestibulum rhoncus est pellentesque elit. Eget mauris pharetra et ultrices neque ornare aenean.\n" +
                "\n"
        },
        {
            title: " Moby Dick",
            author: "Herman Melville",
            date: new Date(2021, 8, 23).toString(),
            rate: 5,
            notes: "nice book"
        },

    ]
    return (
        <div className={"cardCont"}>
            {books.map(book =>
                <Card
                    title={book.title}
                    author={book.author}
                    // date={book.date}
                    rate={book.rate}
                    notes={book.notes}
                    key={Math.random()}
                ></Card>
            )}

        </div>
    );
}

export default CardList;
