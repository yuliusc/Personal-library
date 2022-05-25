import { useEffect, useState } from "react";

const useNavbar = () => {
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

  return navbar;
};

export default useNavbar;
