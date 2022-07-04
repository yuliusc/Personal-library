import React, { useContext, useState } from "react";
import { ShowModalContext } from "../../context/ShowModalContext";

import { BooksContext } from "../../context/BooksContext";

// type bookData = {
//   title: string;
//   author: string;
//   rate: string;
//   date: string;
//   notes: string;
// };

// type showModalT = (prev: boolean) => boolean;

// interface Args {
//   setShowModal: (prev: boolean) => void;
// }
interface BookT {
  title: string;
  author: string;
  date: string;
  notes: string;
  rate: number;
}

const useAddBook = () => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  const { bookSet, setBookSet } = useContext(BooksContext);

  const [bookData, setBookData] = useState<BookT>({
    title: "",
    author: "",
    date: "",
    notes: "",
    rate: 0,
  });

  const [warnings, setWarnings] = useState({
    title: false,
    author: false,
    rate: false,
  });

  const [stars, updateStars] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  });

  const toggleShowAddBookForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowModal((prev: boolean) => !prev);
  };

  const colorStar = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const tempStars = {
      star1: false,
      star2: false,
      star3: false,
      star4: false,
      star5: false,
    };
    for (const i in stars) {
      tempStars[i as keyof typeof tempStars] = true;
      if (i === (e.target as HTMLElement).id) {
        updateStars(tempStars);
        const rating = (e.target as HTMLElement).id.replace("star", "");
        const tempBook = { ...bookData };
        setBookData({
          ...tempBook,
          ["rate"]: +rating,
        });
        return;
      }
    }
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const tempBook = { ...bookData };
    setBookData({
      ...tempBook,
      [e.target.name]: e.target.value.replace(/\s+/g, " "),
    });
  };

  const validateInput = () => {
    setWarnings({
      title: false,
      author: false,
      rate: false,
    });
    if (bookData.title.trim().length === 0) {
      setWarnings({ ...warnings, ["title"]: true });
      return false;
    }
    if (bookData.author.trim().length === 0) {
      setWarnings({ ...warnings, ["author"]: true });
      return false;
    }
    if (!bookData.rate) {
      setWarnings({ ...warnings, ["rate"]: true });
      return false;
    }
    return true;
  };

  const addBookHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }
    const currentBookSet = localStorage.getItem("bookSet");

    localStorage.setItem(
      "bookSet",
      JSON.stringify([bookData].concat(JSON.parse(currentBookSet!)))
    );
    setBookSet([bookData].concat(JSON.parse(currentBookSet!)));
    setBookData({
      title: "",
      author: "",
      date: "",
      notes: "",
      rate: 0,
    });
    setWarnings({
      title: false,
      author: false,
      rate: false,
    });
  };

  return {
    showModal,
    toggleShowAddBookForm,
    changeHandler,
    addBookHandler,
    bookData,
    warnings,
    stars,
    colorStar,
  };
};

export default useAddBook;
