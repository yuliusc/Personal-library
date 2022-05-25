import { useState } from "react";

const useFilters = (setFilter) => {
  const [showDropdown, setShowDropdown] = useState(false);

  let filter;

  const changeFilter = (e) => {
    e.preventDefault();
    filter = e.target.value;
    setFilter(filter);
    document.getElementById("currentFilter").innerText = e.target.innerHTML;
  };

  const showSortBy = () => {
    setShowDropdown(true);
  };

  const hideSortBy = () => {
    setShowDropdown(false);
  };

  const cssClassesDropdown = [
    "customDropdown",
    showDropdown ? "showDropdown" : "hideDropdown",
  ];

  return { showSortBy, hideSortBy, cssClassesDropdown, changeFilter };
};

export default useFilters;
