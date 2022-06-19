import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./addBook.css";
import useAddBook from "./useAddBook";

// interface Props {
//   showAddBook: boolean;
//   // toggleShowAddBookForm: () => void;
// }

// // const AddBook: React.FC<Props> = ({ showAddBook, toggleShowAddBookForm }) => {
// interface TState {
//   value: boolean;
// }

// interface showModalT {
//   showModal: boolean;
//   setShowModal: (arg: boolean) => void;
// }

const AddBookPortal = () => {
  // const { addBookHandler, dataChangeHandler } = useAddBook();
  const {
    showModal,
    toggleShowAddBookForm,
    changeHandler,
    addBookHandler,
    bookData,
    warnings,
  } = useAddBook();

  useEffect((): ReturnType<React.EffectCallback> => {
    if (showModal) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "overlay";
    }
  }, [showModal]);

  const [stars, updateStars] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  });

  return (
    <div className="addBook">
      {/* <form onSubmit={() => addBookHandler()}> */}
      {showModal && (
        <form onSubmit={addBookHandler}>
          <button
            onClick={(e) => toggleShowAddBookForm(e)}
            className={"customButtonDark addBook__button--close"}
          >
            &#10006;
          </button>
          <input
            type="text"
            id="bookName"
            placeholder={"Book name"}
            className={[warnings.title && "warning"] + " addBook__name"}
            value={bookData.title}
            name="title"
            onChange={changeHandler}
          ></input>
          <input
            type="text"
            id="bookAuthor"
            placeholder={"Book author"}
            className={[warnings.author && "warning"] + " addBook__author"}
            value={bookData.author}
            name="author"
            onChange={changeHandler}
          ></input>

          {/* <div className={warningColorStar + " addBook__datenrate"}> */}
          <div>
            <div className={"addBook__rate"}>
              {
                Object.keys(stars).map((el) => {
                  return <i className="updateStars" id={el} key={el}></i>;
                })
                // .map(()=>{
                //   return
                // })
                //  <i className={updateStars1} id="star1" onClick={colorStar}></i>
                //  <i className={updateStars2} id="star2" onClick={colorStar}></i>
                //  <i className={updateStars3} id="star3" onClick={colorStar}></i>
                //  <i className={updateStars4} id="star4" onClick={colorStar}></i>
                //  <i className={updateStars5} id="star5" onClick={colorStar}></i>
              }
            </div>
            <input
              type="date"
              className={"addBook__date"}
              value={bookData.date}
              name="date"
              onChange={changeHandler}
            ></input>
          </div>
          <textarea
            id="bookNotes"
            placeholder={"Notes"}
            name="notes"
            className={"addBook__notes"}
            value={bookData.notes}
            onChange={changeHandler}
          ></textarea>
          <button type="submit" className={"customButtonDark"}>
            Add book
          </button>
        </form>
      )}
    </div>
  );
};

const AddBook = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <AddBookPortal />,
        document.getElementById("modalAddBook") as Element
      )}
    </>
  );
};
export default AddBook;
