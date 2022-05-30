import { useEffect, useState } from "react";

const useNavbar = () => {
  const [position, setPosition] = useState(false);
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

  const deleteAllBooks = () => {
    return true;
  };
  const showAddBookForm = () => {
    return true;
  };

  return { navbar, deleteAllBooks, showAddBookForm };
};

export default useNavbar;
