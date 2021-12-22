import React, {useState, useEffect} from 'react';

function Filters(props) {

    const [filter, setFilter] = useState('');

    const changeFilter = (e) => {
        e.preventDefault();
        // if (filter === 'nameInc') {
        //
        // }
        props.onSortBooks();

    }

    const changedFilter = (e) => {
        setFilter(e.target.value);
    }

    useEffect(() => {
        console.log(filter)
    }, [filter]);

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