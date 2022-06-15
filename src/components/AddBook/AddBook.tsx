import React, { useContext, useEffect } from "react";
import { ShowModalContext } from "../../context/ShowModalContext";
import "./addBook.css";
import useAddBook from "./useAddBook";

interface Props {
  showAddBook: boolean;
  toggleShowAddBookForm: () => void;
}

// const AddBook: React.FC<Props> = ({ showAddBook, toggleShowAddBookForm }) => {

const AddBook = () => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  //   const { addBookHandler, dataChangeHandler } = useAddBook();

  useEffect((): ReturnType<React.EffectCallback> => {
    if (showModal) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "overlay";
    }
  }, [showModal]);

  return (
    <div>
      {/* <form onSubmit={() => addBookHandler()}> */}
      {showModal && (
        <form>
          <button
            //   onClick={toggleShowAddBookForm}
            className={"customButtonDark addBook__button--close"}
          >
            &#10006;
          </button>
          <input
            type="text"
            id="bookName"
            placeholder={"Book name"}
            // className={warningColorName + " addBook__name"}
            // onChange={bookNameChange}
            // onBlur={bookNameBlur}
            // value={bookName}
          ></input>
          <input
            type="text"
            id="bookAuthor"
            placeholder={"Book author"}
            // className={warningColorAuthor + " addBook__author"}
            // onChange={bookAuthorChange}
            // onBlur={bookAuthorBlur}
            // value={bookAuthor}
          ></input>

          {/* <div className={warningColorStar + " addBook__datenrate"}> */}
          <div>
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
              // onChange={bookDateChange}
              // value={bookDate}
            ></input>
          </div>
          <textarea
            id="bookNotes"
            placeholder={"Notes"}
            className={"addBook__notes"}
            // onChange={bookNotesChange}
            // value={bookNotes}
          ></textarea>
          <button type="submit" className={"customButtonDark"}>
            Add book
          </button>
        </form>
      )}
    </div>
  );
};

export default AddBook;
export {};
