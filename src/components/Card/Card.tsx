import React, { useEffect, useMemo } from "react";
import useCard from "./useCard";

import "./card.css";

interface BookI {
  title: string;
  author: string;
  rate: number;
  notes: string;
  date: string;
}

const Card: React.FC<BookI> = ({ title, author, rate, notes, date }) => {
  const { showMoreInfoHandler, hideMoreInfo, showMoreInfo, deleteCardHandler } =
    useCard();

  const filledStar = "fas fa-star";
  const notFilledStar = "far fa-star";

  const generateStars = useMemo(() => {
    console.log("generateStars");
    const stars: string[] = [];
    for (let i = 0; i < 5; i++) {
      if (i + 1 <= rate) {
        stars.push(filledStar);
      } else stars.push(notFilledStar);
    }
    return stars;
  }, []);

  return (
    <div className={"card"}>
      <div className={"card__left"}>
        <h2 className={"card__title"}>{title}</h2>
        <h3 className={"card__author"}>{author}</h3>
      </div>
      <div className={"card__right"}>
        <div
          className={"card__info"}
          onMouseOver={showMoreInfoHandler}
          onMouseLeave={hideMoreInfo}
        >
          Info
        </div>
        {showMoreInfo ? (
          <div className={"card__moreInfo"} id={"moreInfo"}>
            <div className={"card__rate"}>
              {generateStars.map((el, idx) => (
                <i className={el} key={idx}></i>
              ))}
            </div>
            <p className={"card__notes"}>
              {notes ? notes : "You left no notes"}{" "}
            </p>
            {!date ? (
              <p className={"card__date"}>You read the book on: -</p>
            ) : (
              <p className={"card__date"}>You read the book on: {date}</p>
            )}
          </div>
        ) : null}
      </div>
      <button
        onClick={deleteCardHandler}
        className={"card__delete customButtonDark"}
        value={title}
      >
        &#10006;
      </button>
    </div>
  );
};

export default Card;
