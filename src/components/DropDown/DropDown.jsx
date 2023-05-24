import React from "react";
import "./DropDown.css";

const DropDown = ({
  title,
  children,
  top,
  left,
  color,
  backgroundColor,
  onClick,
  width,
  padding,
  border,
  borderLeft
}) => {
  const style = {
    // position: 'absolute',
    top: top,
    left: left,
    color: color,
    backgroundColor: backgroundColor,
    width: width,
    padding: padding,
    border: border,
    borderLeft:borderLeft
  };
  return (
    <div onClick={onClick} style={style}>
      {title}
      <div className="drop-down-container">{children}</div>
    </div>
  );
};

export default DropDown;
