import React, { useContext, useState } from "react";
import { ShowModalContext } from "../../context/ShowModalContext";

import { BooksContext } from "../../context/BooksContext";

// type bookData = {
//   title: string;
//   author: string;
//   rate: string;
//   date: string;
//   notes: string;
// };

// type showModalT = (prev: boolean) => boolean;

// interface Args {
//   setShowModal: (prev: boolean) => void;
// }
interface BookT {
  title: string;
  author: string;
  date: string;
  notes: string;
  rate: number;
}

const useAddBook = () => {
  const { showModal, setShowModal } = useContext(ShowModalContext);
  const { bookSet, setBookSet } = useContext(BooksContext);

  const [bookData, setBookData] = useState<BookT>({
    title: "",
    author: "",
    date: "",
    notes: "",
    rate: 0,
  });

  const [warnings, setWarnings] = useState({
    title: false,
    author: false,
    rate: false,
  });

  const [stars, updateStars] = useState({
    star1: false,
    star2: false,
    star3: false,
    star4: false,
    star5: false,
  });

  const toggleShowAddBookForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setShowModal((prev: boolean) => !prev);
  };

  const colorStar = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const tempStars = {
      star1: false,
      star2: false,
      star3: false,
      star4: false,
      star5: false,
    };
    for (const i in stars) {
      tempStars[i as keyof typeof tempStars] = true;
      if (i === (e.target as HTMLElement).id) {
        updateStars(tempStars);
        const rating = (e.target as HTMLElement).id.replace("star", "");
        const tempBook = { ...bookData };
        setBookData({
          ...tempBook,
          ["rate"]: +rating,
        });
        return;
      }
    }
  };

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const tempBook = { ...bookData };
    setBookData({
      ...tempBook,
      [e.target.name]: e.target.value,
    });
  };

  const validateInput = () => {
    setWarnings({
      title: false,
      author: false,
      rate: false,
    });
    if (bookData.title.trim().length === 0) {
      setWarnings({ ...warnings, ["title"]: true });
      return false;
    }
    if (bookData.author.trim().length === 0) {
      setWarnings({ ...warnings, ["author"]: true });
      return false;
    }
    if (!bookData.rate) {
      setWarnings({ ...warnings, ["rate"]: true });
      return false;
    }
    return true;
  };

  const addBookHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInput()) {
      return;
    }
    const currentBookSet = localStorage.getItem("bookSet");

    localStorage.setItem(
      "bookSet",
      JSON.stringify([bookData].concat(JSON.parse(currentBookSet!)))
    );
    setBookData({
      title: "",
      author: "",
      date: "",
      notes: "",
      rate: 0,
    });
    setWarnings({
      title: false,
      author: false,
      rate: false,
    });
  };

  return {
    showModal,
    toggleShowAddBookForm,
    changeHandler,
    addBookHandler,
    bookData,
    warnings,
    stars,
    colorStar,
  };

  //   const [bookData, setBookData] = useState<bookData>({
  //     title: "",
  //     author: "",
  //     rate: "",
  //     date: "",
  //     notes: "",
  //   });
  //   const [warnings, setWarnings] = useState({
  //     warningTitle: false,
  //     warningAuthor: false,
  //     warningStars: false,
  //   });
  //   const addBookHandler = (e: React.FormEvent) => {
  //     e.preventDefault();

  // const bookNameChange = (e: React.ChangeEvent) => {
  //   setBookData((prev) => ({
  //     ...prev,
  //     ["name"]: (e.target as HTMLInputElement).value,
  //   }));
  // };
  // const bookNameBlur = (e: React.FormEvent) => {
  //   if (!(e.target as HTMLInputElement).value) {
  //     setWarningName(true);
  //   } else {
  //     setWarningName(false);
  //   }
  // };
  // const dataChangeHandler = (e: React.ChangeEvent) => {
  //   const dataTemp11 = { bookData };
  //   // dataTemp11[(e.target as HTMLInputElement).name] = (
  //   //   e.target as HTMLInputElement
  //   // ).value;
  //   console.log(
  //     (e.target as HTMLInputElement).name +
  //       "   " +
  //       (e.target as HTMLInputElement).value
  //   );
  //   // setBookData(dataTemp);
  // };
  // const bookAuthorChange = (e: React.ChangeEvent) => {
  //   setBookData((prev) => ({
  //     ...prev,
  //     ["author"]: (e.target as HTMLInputElement).value,
  //   }));
  //   if (!(e.target as HTMLInputElement).value) {
  //     setWarningAuthor(true);
  //   }
  // };
  // const bookAuthorBlur = (e: React.FormEvent) => {
  //   if (!(e.target as HTMLInputElement).value) {
  //     setWarningAuthor(true);
  //   } else {
  //     setWarningAuthor(false);
  //   }
  // };
  // const bookNotesChange = (e: React.ChangeEvent) => {
  //   setBookData((prev) => ({
  //     ...prev,
  //     ["notes"]: (e.target as HTMLInputElement).value,
  //   }));
  // };
  // const bookDateChange = (e: React.FormEvent) => {
  //   setBookData((prev) => ({
  //     ...prev,
  //     ["date"]: (e.target as HTMLInputElement).value,
  //   }));
  // };
  // const [updateStars1, setUpdateStars1] = useState("far fa-star");
  // const [updateStars2, setUpdateStars2] = useState("far fa-star");
  // const [updateStars3, setUpdateStars3] = useState("far fa-star");
  // const [updateStars4, setUpdateStars4] = useState("far fa-star");
  // const [updateStars5, setUpdateStars5] = useState("far fa-star");
  // const colorStar = (e: Event) => {
  //   // setbookRate((e.target as HTMLInputElement).id.replace("star", ""));
  //   let flag = "0";
  //   for (let i = 5; i > 0; i--) {
  //     const setTemp = "setUpdateStars" + i;
  //     eval(setTemp)("far fa-star");
  //     if ((e.target as HTMLElement).id.replace("star", "") == "1") {
  //       flag = i.toString();
  //       eval(setTemp)("fas fa-star colored");
  //     }
  //     if (flag > i.toString()) {
  //       eval(setTemp)("far fa-star colored1");
  //     }
  //   }
  // };
  // const warningColorName = warningName ? "warning " : "";
  // const warningColorAuthor = warningAuthor ? "warning " : "";
  // const warningColorStar = warningStars ? "warningStar " : "";
  // return {
  //   addBookHandler,
  //   dataChangeHandler,
  // };
};

export default useAddBook;
