import React from "react";
import "./Filters.css";
import DropDown from "../DropDown/DropDown";

const Filters = () => {
  return (
    <div className="filter">
      <DropDown
        title={"Actions"}
        top={"0px"}
        onClick={() => console.log("hi")}
        left={"0px"}
      >
        <button className="btn">Mark all Completed</button>
        <button className="btn">Clear completed</button>

      </DropDown>
      <DropDown
        title={"Filter By Color"}
        top={"0px"}
        onClick={() => console.log("hi")}
        left={"0px"}borderLeft={'1px solid gray'}
        padding={"0px 15px 0"}
      >
        <label htmlFor="red" >
          <input type="checkbox" id="red" value={""} />
          Red
        </label>
        <label htmlFor="green">
          <input type="checkbox" id='green' value={""} />
          Green
        </label>
        <label htmlFor="blue">
          <input type="checkbox" id="blue" value={""} />
          Blue
        </label>
        <label htmlFor="ywllo">
          <input type="checkbox" value={""} />
          Yellow
        </label>
      </DropDown>
      <DropDown
        title={"Filter By status"}
        top={"0px"}
        onClick={() => console.log("hi")}
        left={"0px"}
        borderLeft={'1px solid gray'}
        padding={"0px 15px 0"}
      >
         <button className="btn">All</button>
         <button className="btn">Active</button>
         <button className="btn">Completed</button>
      </DropDown>
    </div>
  );
};

export default Filters;
