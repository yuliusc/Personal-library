import React, { useContext, useState } from "react";

import Home from "./pages/Home/Home";
import { BooksContext } from "./context/BooksContext";
import { ShowModalContext } from "./context/ShowModalContext";

import "./styles/global.css";
import "./styles/media.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [bookSet, setBookSet] = useState([]);

  return (
    <div className="App">
      <ShowModalContext.Provider value={{ showModal, setShowModal }}>
        <BooksContext.Provider value={{ bookSet, setBookSet }}>
          <Home />
        </BooksContext.Provider>
      </ShowModalContext.Provider>
    </div>
  );
}

export default App;
