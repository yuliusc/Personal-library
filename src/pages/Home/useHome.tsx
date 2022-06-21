import { useState, useEffect, useContext } from "react";
import { BooksContext } from "../../context/BooksContext";
// import "./Home.styles";
// import "./styles/global.css";

// import "./styles/media.css";

interface book {
  title: string;
  author: string;
  rate: number;
  date: string;
  notes: string;
}

type booksType = book[];

const useHome = () => {
  let books: booksType = [];
  const { bookSet, setBookSet } = useContext(BooksContext);

  const getBooks = () => {
    if (
      localStorage.getItem("bookSet") === null ||
      JSON.parse(localStorage.getItem("bookSet") as string).length === 0
    ) {
      const d = new Date();

      const currDate = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join(
        "-"
      );

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
      localStorage.setItem("bookSet", JSON.stringify(books));
    } else {
      books = JSON.parse(localStorage.getItem("bookSet") as string);
    }
    return books;
  };

  useEffect(() => {
    setBookSet(getBooks());
  }, []);

  // const deleteCard = (bookName: string): void => {
  //   const tempBookSet: booksType = [];
  //   bookSet.forEach((book) => {
  //     if (book.title !== bookName) {
  //       tempBookSet.push(book);
  //     }
  //   });
  //   setBookSet(tempBookSet);
  //   localStorage.setItem("bookSet", JSON.stringify(tempBookSet));
  // };

  const [showAddBook, setShowAddBook] = useState(false);

  // const addBookForm = (): void => {
  //   setShowAddBook(true);
  //   document.getElementsByTagName("body")[0].style.overflow = "hidden";
  // };

  // const addBookFormHide = (): void => {
  //   setShowAddBook(false);
  //   document.getElementsByTagName("body")[0].style.overflow = "overlay";
  // };

  // const toggleShowAddBookForm = (): void => {
  //   setShowAddBook((prev) => !prev);
  // };

  return { bookSet, setBookSet };
};

export default useHome;
