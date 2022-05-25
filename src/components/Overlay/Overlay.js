import React from "react";
import "./overlay.css";

const Overlay = (props) => {
  return <div className={props.showOverlay ? "overlayShow" : ""}></div>;
};
export default Overlay;
