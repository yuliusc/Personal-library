import React, { useState } from "react";
import { gsap } from "gsap";

import "./App.css";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import CardsList from "./components/CardsList";
import AddBook from "./components/AddBook";
import Overlay from "./components/Overlay";
import Footer from "./components/Footer";
import "./styles/media.css";

let books = [];

if (
  localStorage.getItem("bookSet") === null ||
  JSON.parse(localStorage.getItem("bookSet")).length === 0
) {
  let d = new Date();

  let currDate = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("-");

  books = [
    {
      title: "The Buntline Special",
      author: "Mike Resnick",
      rate: 5,
      date: currDate,
      notes:
        "Welcome to a West like you've never seen before, where electric lights shine down on the streets of Tombstone, while horseless stagecoaches carry passengers to and fro, and where death is no obstacle to The Thing That Was Once Johnny Ringo. Think you know the story of the O.K.",
    },
    {
      title: "The Curious Incident of the Dog in the Night-Time",
      author: "Mark Haddon",
      rate: 2,
      date: currDate,
      notes: "Nice book",
    },
    {
      title: "Life of Pi",
      author: "Yann Martel",
      rate: 4,
      date: currDate,
      notes:
        'Life of Pi is a fantasy adventure novel by Yann Martel published in 2001. The protagonist, Piscine Molitor "Pi" Patel, a Tamil boy from Pondicherry, explores issues of spirituality and practicality from an early age.',
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      rate: 3,
      date: currDate,
      notes:
        "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.",
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      rate: 5,
      date: currDate,
      notes:
        "Sixty years after its original publication, Ray Bradbury’s internationally acclaimed novel Fahrenheit 451 stands as a classic of world literature set in a bleak, dystopian future. Today its message has grown more relevant than ever before.",
    },
  ];
} else {
  books = JSON.parse(localStorage.getItem("bookSet"));
}

function App() {
  const [bookSet, setBookSet] = useState(books);

  const addBookHandler = (name, author, rate, date, notes) => {
    const temp = {
      title: name,
      author: author,
      rate: rate,
      date: date,
      notes: notes,
    };
    setBookSet((prev) => {
      localStorage.setItem("bookSet", JSON.stringify([temp, ...prev]));
      return [temp, ...prev];
    });

    setTimeout(addBookFormHide, 1000);
  };

  const deleteCard = (bookName) => {
    let tempBookSet = [];
    bookSet.forEach((book) => {
      if (book.title !== bookName) {
        tempBookSet.push(book);
      }
    });
    setBookSet(tempBookSet);
    localStorage.setItem("bookSet", JSON.stringify(tempBookSet));
  };

  const deleteAllBooksHandler = () => {
    localStorage.setItem("bookSet", JSON.stringify([]));
    setBookSet([]);
  };

  const [showAddBook, setShowAddBook] = useState(false);

  const addBookForm = () => {
    setShowAddBook(true);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };

  const addBookFormHide = () => {
    setShowAddBook(false);
    document.getElementsByTagName("body")[0].style.overflow = "overlay";
  };

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
