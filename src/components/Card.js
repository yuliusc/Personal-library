import React from 'react';
import '../styles/card.css'

// const dropdown = () => {
//     // document.getElementById('moreInfo').style.display = "block"
//     if (document.getElementById('moreInfo').style.display = "none")
//         document.getElementById('moreInfo').style.display = "block"
//     else {
//         document.getElementById('moreInfo').style.display = "none"
//     }
//     console.log(document.getElementById('moreInfo').style.display)
// }

const Card = (props) => {

    const onDeleteCard = () => {
        props.deleteCard(props.title);
    }

    return (
        <div className={"card"}>
            <div className={"card__left"}>
                <h2 className={"card__title"}>{props.title}</h2>
                <h3 className={"card__author"}>{props.author}</h3>
            </div>
            <div className={"card__right"}>
                <div className={"card__notes"}> Info</div>
                <div className={"card__moreInfo"} id={"moreInfo"}>
                    <p className={"card__date"}>{props.date}</p>
                    <p className={"card__rate"}>{props.rate}/10</p>
                    <p>{props.notes} </p>
                </div>
            </div>
            <button onClick={onDeleteCard} className={"card__delete"}>&#10006;</button>
        </div>
    );
}

export default Card;
