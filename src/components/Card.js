import React, {useState} from 'react';
import '../styles/card.css'

const Card = (props) => {

    const [showMI, setShowMI] = useState(false);

    const onDeleteCard = () => {
        props.deleteCard(props.title);
    }

    const showMoreInfo = () => {
        setShowMI(true)
    }
    const hideMoreInfo = () => {
        setShowMI(false)
    }

    return (
        <div className={"card"}>
            <div className={"card__left"}>
                <h2 className={"card__title"}>{props.title}</h2>
                <h3 className={"card__author"}>{props.author}</h3>
            </div>
            <div className={"card__right"}>
                <div className={"card__info"} onMouseOver={showMoreInfo} onMouseLeave={hideMoreInfo}> Info</div>
                {showMI ? <div className={"card__moreInfo"} id={"moreInfo"}>
                    {
                        (() => {
                            if (props.rate == 1) {
                                return <div className={"card__rate"}>
                                    <i className='fas fa-star'></i>
                                    <i className='far fa-star'></i>
                                    <i className='far fa-star'></i>
                                    <i className='far fa-star'></i>
                                    <i className='far fa-star'></i>
                                </div>
                            } else if (props.rate == 2) {
                                return <div className={"card__rate"}>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='far fa-star'></i>
                                    <i className='far fa-star'></i>
                                    <i className='far fa-star'></i>
                                </div>
                            } else if (props.rate == 3) {
                                return <div className={"card__rate"}>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='far fa-star'></i>
                                    <i className='far fa-star'></i>
                                </div>
                            } else if (props.rate == 4) {
                                return <div className={"card__rate"}>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='far fa-star'></i>
                                </div>
                            } else if (props.rate == 5) {
                                return <div className={"card__rate"}>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                </div>
                            } else return
                        })()
                    }
                    <p className={"card__notes"}>{props.notes ? props.notes : 'You left no notes'} </p>
                    <p className={"card__date"}>You read the book on: {props.date}</p>

                </div> : null
                }
            </div>
            <button onClick={onDeleteCard} className={"card__delete"}>&#10006;</button>
        </div>
    );
}

export default Card;
