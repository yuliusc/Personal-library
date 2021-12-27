import React from 'react';
import '../styles/card.css'
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: #c2aaff;
  cursor: pointer;
`;

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
    return (
        <div className={"card"}>
            <div className={"card__left"}>
                <h2 className={"card__title"}>{props.title}</h2>
                <h3 className={"card__author"}>{props.author}</h3>
            </div>
            {/*<p className={"card__date"}>04.04.2021</p>*/}
            <div className={"card__right"}>
                <p className={"card__rate"}>{props.rate}/10</p>
                <Button className={"card__notes"}> ...</Button>
                <p className={"card__moreInfo"} id={"moreInfo"}>{props.notes}</p>
            </div>
        </div>
    );
}

export default Card;
