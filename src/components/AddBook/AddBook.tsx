import React from "react";

import "./addBook.css";
import useAddBook from "./useAddBook";

interface Props {
  closeAddBook: () => void;
  onAddBook: () => void;
}

const AddBook: React.FC<Props> = ({ closeAddBook, onAddBook }) => {
  const {
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
  } = useAddBook(onAddBook);

  return (
    <div>
      <form onSubmit={() => addBookHandler()}>
        <button
          onClick={closeAddBook}
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
            {/* <i className={updateStars1} id="star1" onClick={colorStar}></i>
            <i className={updateStars2} id="star2" onClick={colorStar}></i>
            <i className={updateStars3} id="star3" onClick={colorStar}></i>
            <i className={updateStars4} id="star4" onClick={colorStar}></i>
            <i className={updateStars5} id="star5" onClick={colorStar}></i> */}
          </div>
          <input
            type="date"
            className={"addBook__date"}
            onChange={bookDateChange}
            value={bookDate}
          ></input>
        </div>
        <textarea
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
