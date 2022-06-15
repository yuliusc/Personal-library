import React from "react";
import useHome from "./useHome";
import { BooksContext } from "../../context/BooksContext";
import { ShowModalContext } from "../../context/ShowModalContext";

import Navbar from "../../components/Navbar/Navbar";
import CardsList from "../../components/CardList/CardList";
import AddBook from "../../components/AddBook/AddBook";
// import Overlay from "../../components/Overlay/Overlay";
import Footer from "../../components/Footer/Footer";

const Home: React.FC = () => {
  const { bookSet, setBookSet, showModal, setShowModal } = useHome();

  return (
    <div>
      <ShowModalContext.Provider value={{ showModal, setShowModal }}>
        <Navbar
        // deleteAllBooks={deleteAllBooksHandler}
        // showAddBookForm={addBookForm}
        />
        {/* <Overlay showOverlay={showAddBook} /> */}
        <AddBook />
        <BooksContext.Provider value={{ bookSet, setBookSet }}>
          <CardsList
            books={bookSet}
            // deleteCard={deleteCard}
            // showAddBookForm={addBookForm}
          />
        </BooksContext.Provider>
      </ShowModalContext.Provider>
      <Footer />
    </div>
  );
};

export default Home;
