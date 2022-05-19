import React, {useState} from 'react';
import '../styles/customDropdown.css'

function Filters(props) {

    const [showDropdown, setShowDropdown] = useState(false);

    let filter;

    const changeFilter = (e) => {
        e.preventDefault();
        filter = e.target.value;
        props.setFilter(filter);
        document.getElementById('currentFilter').innerText = e.target.innerHTML
    }

    const showSortBy = () => {
        setShowDropdown(true)
    }

    const hideSortBy = () => {
        setShowDropdown(false)
    }

    const cssClassesDropdown = ['customDropdown', showDropdown ? 'showDropdown' : 'hideDropdown'];

    return (
        <div className={'filterCont'} onMouseOver={showSortBy}
             onMouseLeave={hideSortBy}>
            <p id="sortByText">Sort by:<span id="currentFilter"></span></p>
            <ul name="Sort by" id="sortBy" className={cssClassesDropdown.join(' ')}>

                <li>
                    <button value="nameInc" onClick={changeFilter}> Book name &#8599; </button>
                </li>
                <li>
                    <button value="nameDec" onClick={changeFilter}> Book name &#8600; </button>
                </li>
                <li>
                    <button value="authorInc" onClick={changeFilter}> Author &#8599; </button>
                </li>
                <li>
                    <button value="authorDec" onClick={changeFilter}> Author &#8600; </button>
                </li>
                <li>
                    <button value="rateInc" onClick={changeFilter}> Rate &#8599; </button>
                </li>
                <li>
                    <button value="rateDec" onClick={changeFilter}> Rate &#8600; </button>
                </li>
            </ul>
        </div>
    );
}

export default Filters;
