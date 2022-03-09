import React from 'react';
import '../styles/overlay.css'

const Overlay = (props) => {

    return (
        <div className={props.showOverlay ? 'overlayShow' : ''}>
        </div>
    )
}
export default Overlay
