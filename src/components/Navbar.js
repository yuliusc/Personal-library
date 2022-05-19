import React from "react";
import "../styles/navbar.css";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [position, setPosition] = useState(false);
  const navbar = !position ? "navbar" : "navbarSm navbar";

  useEffect(() => {
    const getPos = (event) => {
      if (window.scrollY > 150) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    };

    window.addEventListener("scroll", getPos, true);

    return () => {
      window.removeEventListener("scroll", getPos);
    };
  }, []);

  return (
    <>
      <div className={navbar}>
        <div className={navbar + "__buttons"}>
          <button
            onClick={props.deleteAllBooks}
            className={navbar + "__clear customButton"}
          >
            Clear book set
          </button>
          <button
            onClick={props.showAddBookForm}
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
