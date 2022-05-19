import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/cardCont.css";
import Filters from "./Filters";

const CardList = (props) => {
  let sortedBooks = props.books;
  const [updateBooks, setUpdateBooks] = useState([]);
  const [updateFilter, setUpdateFilter] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [showText, setShowText] = useState(false);

  const setFilterHandler = (filter) => {
    setUpdateFilter(filter);

    switch (filter) {
      case "nameInc":
        sortedBooks = props.books.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        break;

      case "nameDec":
        sortedBooks = props.books.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
        break;

      case "authorInc":
        sortedBooks = props.books.sort((a, b) => {
          return a.author.localeCompare(b.author);
        });
        break;

      case "authorDec":
        sortedBooks = props.books.sort((a, b) => {
          return b.author.localeCompare(a.author);
        });
        break;

      case "rateInc":
        sortedBooks = props.books.sort((a, b) => {
          return a.rate - b.rate;
        });
        break;

      case "rateDec":
        sortedBooks = props.books.sort((a, b) => {
          return b.rate - a.rate;
        });
        break;
      default:
        break;
    }
    setUpdateBooks(sortedBooks);
  };

  const deleteCard = (bookName) => {
    props.deleteCard(bookName);
  };

  useEffect(() => {
    if (props.books.length === 0) {
      setShowText(true);
    } else {
      setShowText(false);
    }

    if (props.books.length < 2) {
      setShowFilters(false);
    } else setShowFilters(true);
  }, [props.books]);
  return (
    <div className={"cardCont"}>
      {showFilters ? <Filters setFilter={setFilterHandler} /> : null}

      {showText ? (
        <p className="cardCont__noBooks">
          <span onClick={props.showAddBookForm}>Add first book</span> or{" "}
          <span
            onClick={() => {
              window.location.reload();
            }}
          >
            refresh the page
          </span>{" "}
          to see book examples
        </p>
      ) : null}
      {sortedBooks.map((book) => (
        <Card
          title={book.title}
          author={book.author}
          date={book.date.toString()}
          rate={book.rate}
          notes={book.notes}
          key={book.title}
          deleteCard={deleteCard}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
