import React, { useState } from "react";

interface onAddBookArgs {
  bookName: string;
  bookAuthor: string;
  bookRate: number;
  bookDate: string;
  bookNotes: string;
}

const useAddBook = ({onAddBook<onAddBookArgs>}) => {
  const [bookName, setbookName] = useState("");
  const [bookAuthor, setbookAuthor] = useState("");
  const [bookRate, setbookRate] = useState("");
  const [bookNotes, setbookNotes] = useState("");
  const [bookDate, setbookDate] = useState("");
  const [warningName, setWarningName] = useState(false);
  const [warningAuthor, setWarningAuthor] = useState(false);
  const [warningStars, setWarningStars] = useState(false);

  const addBookHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookName.trim().length === 0) {
      setWarningName(true);
    }
    if (bookAuthor.trim().length === 0) {
      setWarningAuthor(true);
    }
    if (!bookRate.length) {
      setWarningStars(true);
    }

    if (
      bookName.trim().length === 0 ||
      bookAuthor.trim().length === 0 ||
      !bookRate.length
    ) {
      return;
    }

    onAddBook(bookName, bookAuthor, bookRate, bookDate, bookNotes);

    setbookName("");
    setbookAuthor("");
    setbookRate("");
    setbookNotes("");
    setbookDate("");
  };

  const bookNameChange = (e: React.ChangeEvent) => {
    setbookName((e.target as HTMLInputElement).value);
  };

  const bookNameBlur = (e: React.FormEvent) => {
    if (!(e.target as HTMLInputElement).value) {
      setWarningName(true);
    } else {
      setWarningName(false);
    }
  };

  const bookAuthorChange = (e: React.ChangeEvent) => {
    setbookAuthor((e.target as HTMLInputElement).value);
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
    setbookNotes((e.target as HTMLInputElement).value);
  };
  const bookDateChange = (e: React.FormEvent) => {
    setbookDate((e.target as HTMLInputElement).value);
  };
  const [updateStars1, setUpdateStars1] = useState("far fa-star");
  const [updateStars2, setUpdateStars2] = useState("far fa-star");
  const [updateStars3, setUpdateStars3] = useState("far fa-star");
  const [updateStars4, setUpdateStars4] = useState("far fa-star");
  const [updateStars5, setUpdateStars5] = useState("far fa-star");

  const colorStar = (e: Event) => {
    setbookRate((e.target as HTMLInputElement).id.replace("star", ""));
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
    bookName,
    warningColorAuthor,
    bookAuthorChange,
    bookAuthorBlur,
    bookAuthor,
    warningColorStar,
    bookDateChange,
    bookDate,
    bookNotesChange,
    bookNotes,
  };
};

export default useAddBook;
