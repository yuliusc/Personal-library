import useNavbar from "./useNavbar";

// import "../styles/navbar.css";

const Navbar = ({ deleteAllBooks, showAddBookForm }) => {
  const navbar = useNavbar();

  return (
    <>
      <div className={navbar}>
        <div className={navbar + "__buttons"}>
          <button
            onClick={deleteAllBooks}
            className={navbar + "__clear customButton"}
          >
            Clear book set
          </button>
          <button
            onClick={showAddBookForm}
            className={navbar + "__add customButton"}
          >
            Add your book
          </button>
        </div>
        <h1 className={navbar + "__text"}>Recently read books </h1>
      </div>
    </>
  );
};

export default Navbar;
