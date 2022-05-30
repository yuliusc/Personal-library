import React from "react";
import "./overlay.css";

interface Props {
  showOverlay: boolean;
}
const Overlay: React.FC<Props> = ({ showOverlay }) => {
  return <div>Hello</div>;

  // <div className={showOverlay ? "overlayShow" : ""}>
};
export default Overlay;
