import React from "react";

import useFilters from "./useFilters";

import "./filters.css";

const Filters = () => {
  const { showSortBy, hideSortBy, cssClassesDropdown, changeFilter } =
    useFilters();

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
