import React from "react";

import useFilters from "./useFilters";

import "./filters.css";

const Filters = () => {
  const { showSortBy, hideSortBy, cssClassesDropdown, changeFilter } =
    useFilters();

  const filters = [
    {
      name: "nameInc",
      sign: "&#8599;",
    },
    {
      name: "nameDec",
      sign: "&#8600;",
    },
    {
      name: "authorInc",
      sign: "&#8599;",
    },
    {
      name: "authorDec",
      sign: "&#8600;",
    },
    {
      name: "rateInc",
      sign: "&#8599;",
    },
    {
      name: "rateDec",
      sign: "&#8600;",
    },
  ];

  return (
    <div
      className={"filterCont"}
      onMouseOver={showSortBy}
      onMouseLeave={hideSortBy}
    >
      <p id="sortByText">
        Sort by:<span id="currentFilter"></span>
      </p>
      <ul id="sortBy" className={cssClassesDropdown.join(" ")}>
        {filters.map((el) => {
          return (
            <li key={el.name}>
              <button value={el.name} onClick={changeFilter}>
                Book name{" "}
                {String.fromCodePoint(
                  parseInt(el.sign.replace(/&#|;/g, ""), 10)
                )}
              </button>
            </li>
          );
        })}

        <li>
          <button value="nameInc" onClick={changeFilter}>
            Book name &#8599;
          </button>
        </li>
        <li>
          <button value="nameDec" onClick={changeFilter}>
            Book name &#8600;
          </button>
        </li>
        <li>
          <button value="authorInc" onClick={changeFilter}>
            Author &#8599;
          </button>
        </li>
        <li>
          <button value="authorDec" onClick={changeFilter}>
            Author &#8600;
          </button>
        </li>
        <li>
          <button value="rateInc" onClick={changeFilter}>
            Rate &#8599;
          </button>
        </li>
        <li>
          <button value="rateDec" onClick={changeFilter}>
            Rate &#8600;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
