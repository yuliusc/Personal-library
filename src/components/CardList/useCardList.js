import { useState, useEffect } from "react";

const useCardList = (books, deleteCard, showAddBookForm) => {
  let sortedBooks = books;
  const [updateBooks, setUpdateBooks] = useState([]);
  const [updateFilter, setUpdateFilter] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [showText, setShowText] = useState(false);

  const setFilterHandler = (filter) => {
    setUpdateFilter(filter);

    switch (filter) {
      case "nameInc":
        sortedBooks = books.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        break;

      case "nameDec":
        sortedBooks = books.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
        break;

      case "authorInc":
        sortedBooks = books.sort((a, b) => {
          return a.author.localeCompare(b.author);
        });
        break;

      case "authorDec":
        sortedBooks = books.sort((a, b) => {
          return b.author.localeCompare(a.author);
        });
        break;

      case "rateInc":
        sortedBooks = books.sort((a, b) => {
          return a.rate - b.rate;
        });
        break;

      case "rateDec":
        sortedBooks = books.sort((a, b) => {
          return b.rate - a.rate;
        });
        break;
      default:
        break;
    }
    setUpdateBooks(sortedBooks);
  };

  const deleteCardHandler = (bookName) => {
    deleteCard(bookName);
  };

  useEffect(() => {
    if (books.length === 0) {
      setShowText(true);
    } else {
      setShowText(false);
    }

    if (books.length < 2) {
      setShowFilters(false);
    } else setShowFilters(true);
  }, [books]);
};

export default useCardList;
