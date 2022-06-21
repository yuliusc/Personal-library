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
  const { bookSet, setBookSet } = useHome();

  return (
    <div>
      <Navbar
      // deleteAllBooks={deleteAllBooksHandler}
      // showAddBookForm={addBookForm}
      />
      {/* <Overlay showOverlay={showAddBook} /> */}
      <AddBook />
      <CardsList
      // books={bookSet}
      // deleteCard={deleteCard}
      // showAddBookForm={addBookForm}
      />

      <Footer />
    </div>
  );
};

export default Home;
