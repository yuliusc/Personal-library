import useHome from "./useHome";
import { BooksContext } from "../../context/BooksContext";

import Navbar from "../../components/Navbar/Navbar";
import CardsList from "../../components/CardList/CardList";
import AddBook from "../../components/AddBook/AddBook";
import Overlay from "../../components/Overlay/Overlay";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const {
    deleteAllBooksHandler,
    addBookForm,
    showAddBook,
    addBookHandler,
    addBookFormHide,
    bookSet,
    setBookSet,
    deleteCard,
  } = useHome();

  return (
    <div>
      <Navbar
        deleteAllBooks={deleteAllBooksHandler}
        showAddBookForm={addBookForm}
      />
      <Overlay showOverlay={showAddBook} />
      {showAddBook ? (
        <AddBook onAddBook={addBookHandler} closeAddBook={addBookFormHide} />
      ) : null}
      <BooksContext.Provider value={{ bookSet, setBookSet }}>
        <CardsList
          books={bookSet}
          deleteCard={deleteCard}
          showAddBookForm={addBookForm}
        />
      </BooksContext.Provider>
      <Footer />
    </div>
  );
};

export default Home;
