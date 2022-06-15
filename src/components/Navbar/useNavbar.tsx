import { useContext, useEffect, useState } from "react";
import { ShowModalContext } from "../../context/ShowModalContext";

const useNavbar = () => {
  const [position, setPosition] = useState(false);
  const { showModal, setShowModal } = useContext(ShowModalContext);

  const navbar = !position ? "navbar" : "navbarSm navbar";

  useEffect(() => {
    const getPos = () => {
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

  const showAddBookFormHandler = () => {
    setShowModal(true);
    console.log(showModal);
  };

  const deleteAllBooks = (): void => {
    localStorage.setItem("bookSet", JSON.stringify([]));
  };

  return { navbar, deleteAllBooks, showAddBookFormHandler };
};

export default useNavbar;
