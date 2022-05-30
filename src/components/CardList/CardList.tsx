import React from "react";

import useCardList from "./useCardList";
import { BooksContext } from "../../context/BooksContext";
import { useContext } from "react";

import Card from "../Card/Card";
import Filters from "../Filters/Filters";

import "./cardCont.css";

interface Props {
  books: (string | number)[];
  deleteCard: () => void;
  showAddBookForm: () => void;
}

interface Book {
  title: string;
  author: string;
  date: string;
  rate: number;
  notes: string;
  key: number;
  deleteCard: () => void;
}

const CardList: React.FC<Props> = ({ books, deleteCard, showAddBookForm }) => {
  const {
    showFilters,
    setFilterHandler,
    showText,
    sortedBooks,
    deleteCardHandler,
  } = useCardList(books, deleteCard, showAddBookForm);

  const { bookSet, setBookSet } = useContext(BooksContext);

  return (
    <div className={"cardCont"}>
      {showFilters ? <Filters setFilter={setFilterHandler} /> : null}

      {bookSet.length === 0 ? (
        <p className="cardCont__noBooks">
          <span onClick={showAddBookForm}>Add first book</span> or{" "}
          <span
            onClick={() => {
              window.location.reload();
            }}
          >
            refresh the page
          </span>{" "}
          to see book examples
        </p>
      ) : (
        bookSet.map((book: Book) => (
          <Card
            title={book.title}
            author={book.author}
            date={book.date.toString()}
            rate={book.rate}
            notes={book.notes}
            key={book.title}
            deleteCard={deleteCardHandler}
          ></Card>
        ))
      )}
    </div>
  );
};

export default CardList;
