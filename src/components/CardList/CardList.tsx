import React from "react";

import useCardList from "./useCardList";

import { ShowModalContext } from "../../context/ShowModalContext";
import { useContext } from "react";

import Card from "../Card/Card";
import Filters from "../Filters/Filters";

import "./cardCont.css";

interface book {
  title: string;
  author: string;
  rate: number;
  date: string;
  notes: string;
}

type booksType = book[];
interface Props {
  books: booksType;
  //   deleteCard: () => void;
  //   showAddBookForm: () => void;
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
// const CardList: React.FC<Props> = ({ books, deleteCard, showAddBookForm }) => {
const CardList = () => {
  const {
    showFilters,
    // setFilterHandler,
    bookSet,
    showText,
    // sortedBooks,
    // deleteCardHandler,
  } = useCardList();

  const { showModal, setShowModal } = useContext(ShowModalContext);

  return (
    <div className={"cardCont"}>
      {showFilters ? <Filters /> : null}

      {bookSet.length === 0 ? (
        <p className="cardCont__noBooks">
          <span onClick={() => setShowModal(true)}>Add first book</span> or{" "}
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
            // deleteCard={deleteCardHandler}
          ></Card>
        ))
      )}
    </div>
  );
};

export default CardList;
