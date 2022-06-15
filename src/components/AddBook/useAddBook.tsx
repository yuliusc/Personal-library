import React, { useContext, useState } from "react";
import { ShowModalContext } from "../../context/ShowModalContext";

import { BooksContext } from "../../context/BooksContext";
const { showModal, setShowModal } = useContext(ShowModalContext);

// type bookData = {
//   title: string;
//   author: string;
//   rate: string;
//   date: string;
//   notes: string;
// };

// type onAddBookArgs = (bookData: bookData) => void;

const useAddBook = () => {
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
  //     if (bookData.title.trim().length === 0) {
  //       setWarnings({ ...warnings, warningTitle: true });
  //       return;
  //     }
  //     if (bookData.author.trim().length === 0) {
  //       setWarnings({ ...warnings, warningAuthor: true });
  //       return;
  //     }
  //     if (!bookData.rate.length) {
  //       setWarnings({ ...warnings, warningStars: true });
  //       return;
  //     }
  //     const currentBookSet = localStorage.getItem("bookSet");
  //     localStorage.setItem("bookSet", JSON.stringify([bookData, currentBookSet]));
  //     setBookData({
  //       title: "",
  //       author: "",
  //       rate: "",
  //       date: "",
  //       notes: "",
  //     });
  //   };
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
