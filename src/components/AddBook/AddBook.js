import React, { useState } from "react";
import "../styles/addBook.css";

const AddBook = (props) => {
  const [bookName, setbookName] = useState("");
  const [bookAuthor, setbookAuthor] = useState("");
  const [bookRate, setbookRate] = useState("");
  const [bookNotes, setbookNotes] = useState("");
  const [bookDate, setbookDate] = useState("");
  const [warningName, setWarningName] = useState(false);
  const [warningAuthor, setWarningAuthor] = useState(false);
  const [warningStars, setWarningStars] = useState(false);

  const addBookHandler = (e) => {
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

    props.onAddBook(bookName, bookAuthor, bookRate, bookDate, bookNotes);

    setbookName("");
    setbookAuthor("");
    setbookRate("");
    setbookNotes("");
    setbookDate("");
  };

  const bookNameChange = (e) => {
    setbookName(e.target.value);
  };

  const bookNameBlur = (e) => {
    if (!e.target.value) {
      setWarningName(true);
    } else {
      setWarningName(false);
    }
  };

  const bookAuthorChange = (e) => {
    setbookAuthor(e.target.value);
    if (!e.target.value) {
      setWarningAuthor(true);
    }
  };
  const bookAuthorBlur = (e) => {
    if (!e.target.value) {
      setWarningAuthor(true);
    } else {
      setWarningAuthor(false);
    }
  };
  const bookNotesChange = (e) => {
    setbookNotes(e.target.value);
  };
  const bookDateChange = (e) => {
    setbookDate(e.target.value);
  };
  const [updateStars1, setUpdateStars1] = useState("far fa-star");
  const [updateStars2, setUpdateStars2] = useState("far fa-star");
  const [updateStars3, setUpdateStars3] = useState("far fa-star");
  const [updateStars4, setUpdateStars4] = useState("far fa-star");
  const [updateStars5, setUpdateStars5] = useState("far fa-star");

  const mark = (e) => {
    setbookRate(e.target.id.replace("star", ""));
    let flag = 0;
    for (let i = 5; i > 0; i--) {
      let setTemp = "setUpdateStars" + i;
      eval(setTemp)("far fa-star");

      if (e.target.id.replace("star", "") == i) {
        flag = i;
        eval(setTemp)("fas fa-star colored");
      }

      if (flag > i) {
        eval(setTemp)("far fa-star colored1");
      }
    }
  };

  let warningColorName = warningName ? "warning " : "";
  let warningColorAuthor = warningAuthor ? "warning " : "";
  let warningColorStar = warningStars ? "warningStar " : "";

  return (
    <div className={"addBook"}>
      <form onSubmit={addBookHandler}>
        <button
          onClick={props.closeAddBook}
          className={"customButtonDark addBook__button--close"}
        >
          &#10006;
        </button>
        <input
          type="text"
          id="bookName"
          placeholder={"Book name"}
          className={warningColorName + " addBook__name"}
          onChange={bookNameChange}
          onBlur={bookNameBlur}
          value={bookName}
        ></input>
        <input
          type="text"
          id="bookAuthor"
          placeholder={"Book author"}
          className={warningColorAuthor + " addBook__author"}
          onChange={bookAuthorChange}
          onBlur={bookAuthorBlur}
          value={bookAuthor}
        ></input>

        <div className={warningColorStar + " addBook__datenrate"}>
          <div className={"addBook__rate"}>
            <i className={updateStars1} id="star1" onClick={mark}></i>
            <i className={updateStars2} id="star2" onClick={mark}></i>
            <i className={updateStars3} id="star3" onClick={mark}></i>
            <i className={updateStars4} id="star4" onClick={mark}></i>
            <i className={updateStars5} id="star5" onClick={mark}></i>
          </div>
          <input
            type="date"
            className={"addBook__date"}
            onChange={bookDateChange}
            value={bookDate}
          ></input>
        </div>
        <textarea
          type="text"
          id="bookNotes"
          placeholder={"Notes"}
          className={"addBook__notes"}
          onChange={bookNotesChange}
          value={bookNotes}
        ></textarea>
        <button type="submit" className={"customButtonDark"}>
          Add book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
