import React, {useState, useEffect} from 'react';

function Filters(props) {

    // const [updatefilter, setUpdateFilter] = useState('');

    let filter;

    const changeFilter = (e) => {
        e.preventDefault();
        props.setFilter(filter);
    }

    const changedFilter = (e) => {
        filter = e.target.value;
    }

    return (
        <div>
            <form onChange={changeFilter}>
                <select name="Sort by" id="sortBy" value={filter} onChange={changedFilter}>
                    <option>Choose filter</option>
                    <option value="nameInc">Book name &#8599; </option>
                    <option value="nameDec">Book name &#8600;</option>
                    <option value="authorInc">Author &#8599;</option>
                    <option value="authorDec">Author &#8600;</option>
                    <option value="rateInc">Rate &#8599;</option>
                    <option value="rateDec">Rate &#8600;</option>
                </select>
            </form>
        </div>
    );
}

export default Filters;
