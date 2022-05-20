import useCardList from "./useCardList";

import Card from "../Card/Card";
import Filters from "../Filters/Filters";

import "../styles/cardCont.css";

const CardList = ({ books, deleteCard, showAddBookForm }) => {
  const {
    showFilters,
    setFilterHandler,
    showText,
    sortedBooks,
    deleteCardHandler,
  } = useCardList(books, deleteCard, showAddBookForm);

  return (
    <div className={"cardCont"}>
      {showFilters ? <Filters setFilter={setFilterHandler} /> : null}

      {showText ? (
        <p className="cardCont__noBooks">
          <span onClick={showAddBookForm}>Add first book</span> or{" "}
          <span
            onClick={() => {
              window.location.reload();
            }}
          >
            refresh the page
          </span>{" "}
          to see book examples
        </p>
      ) : null}
      {sortedBooks.map((book) => (
        <Card
          title={book.title}
          author={book.author}
          date={book.date.toString()}
          rate={book.rate}
          notes={book.notes}
          key={book.title}
          deleteCard={deleteCardHandler}
        ></Card>
      ))}
    </div>
  );
};

export default CardList;
