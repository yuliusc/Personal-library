import React from "react";
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
          {" "}
          Info
        </div>
        {showMoreInfo ? (
          <div className={"card__moreInfo"} id={"moreInfo"}>
            {(() => {
              if (rate === 1) {
                return (
                  <div className={"card__rate"}>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                );
              } else if (rate === 2) {
                return (
                  <div className={"card__rate"}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                );
              } else if (rate === 3) {
                return (
                  <div className={"card__rate"}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                );
              } else if (rate === 4) {
                return (
                  <div className={"card__rate"}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                );
              } else if (rate === 5) {
                return (
                  <div className={"card__rate"}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                );
              } else return;
            })()}
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
