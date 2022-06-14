import React, { useState } from "react";
import { BooksContext } from "../../context/BooksContext";

type bookData = {
  name: string;
  author: string;
  rate: string;
  date: string;
  notes: string;
};

type onAddBookArgs = (bookData: bookData) => void;

const useAddBook = ({ onAddBook: onAddBookArgs }) => {
  const [bookData, setBookData] = useState<bookData>({
    name: "",
    author: "",
    rate: "",
    date: "",
    notes: "",
  });
  const [warningName, setWarningName] = useState(false);
  const [warningAuthor, setWarningAuthor] = useState(false);
  const [warningStars, setWarningStars] = useState(false);

  const addBookHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookData.name.trim().length === 0) {
      setWarningName(true);
    }
    if (bookData.author.trim().length === 0) {
      setWarningAuthor(true);
    }
    if (!bookData.rate.length) {
      setWarningStars(true);
    }

    if (
      bookData.name.trim().length === 0 ||
      bookData.author.trim().length === 0 ||
      !bookData.rate.length
    ) {
      return;
    }

    // onAddBook(bookData);
    setBookData({
      name: "",
      author: "",
      rate: "",
      date: "",
      notes: "",
    });
  };

  const bookNameChange = (e: React.ChangeEvent) => {
    setBookData((prev) => ({
      ...prev,
      ["name"]: (e.target as HTMLInputElement).value,
    }));
  };

  const bookNameBlur = (e: React.FormEvent) => {
    if (!(e.target as HTMLInputElement).value) {
      setWarningName(true);
    } else {
      setWarningName(false);
    }
  };

  const dataChangeHandler = (e: React.ChangeEvent) => {
    const dataTemp = { bookData };

    dataTemp[(e.target as HTMLInputElement).name] = (
      e.target as HTMLInputElement
    ).value;

    console.log(
      (e.target as HTMLInputElement).name +
        "   " +
        (e.target as HTMLInputElement).value
    );
    // setBookData(dataTemp);
  };

  const bookAuthorChange = (e: React.ChangeEvent) => {
    setBookData((prev) => ({
      ...prev,
      ["author"]: (e.target as HTMLInputElement).value,
    }));
    if (!(e.target as HTMLInputElement).value) {
      setWarningAuthor(true);
    }
  };
  const bookAuthorBlur = (e: React.FormEvent) => {
    if (!(e.target as HTMLInputElement).value) {
      setWarningAuthor(true);
    } else {
      setWarningAuthor(false);
    }
  };
  const bookNotesChange = (e: React.ChangeEvent) => {
    setBookData((prev) => ({
      ...prev,
      ["notes"]: (e.target as HTMLInputElement).value,
    }));
  };
  const bookDateChange = (e: React.FormEvent) => {
    setBookData((prev) => ({
      ...prev,
      ["date"]: (e.target as HTMLInputElement).value,
    }));
  };
  const [updateStars1, setUpdateStars1] = useState("far fa-star");
  const [updateStars2, setUpdateStars2] = useState("far fa-star");
  const [updateStars3, setUpdateStars3] = useState("far fa-star");
  const [updateStars4, setUpdateStars4] = useState("far fa-star");
  const [updateStars5, setUpdateStars5] = useState("far fa-star");

  const colorStar = (e: Event) => {
    // setbookRate((e.target as HTMLInputElement).id.replace("star", ""));
    let flag = "0";
    for (let i = 5; i > 0; i--) {
      const setTemp = "setUpdateStars" + i;
      eval(setTemp)("far fa-star");

      if ((e.target as HTMLElement).id.replace("star", "") == "1") {
        flag = i.toString();
        eval(setTemp)("fas fa-star colored");
      }

      if (flag > i.toString()) {
        eval(setTemp)("far fa-star colored1");
      }
    }
  };

  const warningColorName = warningName ? "warning " : "";
  const warningColorAuthor = warningAuthor ? "warning " : "";
  const warningColorStar = warningStars ? "warningStar " : "";

  return {
    addBookHandler,
    warningColorName,
    bookNameChange,
    bookNameBlur,
    warningColorAuthor,
    bookAuthorChange,
    bookAuthorBlur,
    warningColorStar,
    bookDateChange,
    bookNotesChange,
  };
};

export default useAddBook;
