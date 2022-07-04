import { useState, useContext } from "react";

import { BooksContext } from "../../context/BooksContext";

interface BookI {
  title: string;
  author: string;
  rate: number;
  notes: string;
  // date: string;
  // deleteCard: (title: string) => void;
}

const useCard = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { bookSet, setBookSet } = useContext(BooksContext);

  const deleteCardHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const tempBookSet = bookSet.filter(
      (book: BookI) => book.title !== (e.target as HTMLButtonElement).value
    );
    setBookSet(tempBookSet);
  };

  const showMoreInfoHandler = () => {
    setShowMoreInfo(true);
  };
  const hideMoreInfo = () => {
    setShowMoreInfo(false);
  };

  return { showMoreInfoHandler, hideMoreInfo, showMoreInfo, deleteCardHandler };
};
export default useCard;
