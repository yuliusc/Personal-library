import useHome from "./useHome";

import Navbar from "../../Navbar/Navbar";
import CardsList from "../../CardsList/CardsList";
import AddBook from "../../AddBook/AddBook";
import Overlay from "../../Overlay/Overlay";
import Footer from "../../Footer/Footer";

const Home = () => {
  const {
    deleteAllBooksHandler,
    addBookForm,
    showAddBook,
    addBookHandler,
    addBookFormHide,
    bookSet,
    deleteCard,
  } = useHome();

  <div>
    <Navbar
      deleteAllBooks={deleteAllBooksHandler}
      showAddBookForm={addBookForm}
    />
    <Overlay showOverlay={showAddBook} />
    {showAddBook ? (
      <AddBook onAddBook={addBookHandler} closeAddBook={addBookFormHide} />
    ) : null}
    <CardsList
      books={bookSet}
      deleteCard={deleteCard}
      showAddBookForm={addBookForm}
    />
    <Footer />
  </div>;
};

export default Home;
