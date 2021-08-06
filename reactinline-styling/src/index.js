import React from "react";
import ReactDOM from "react-dom";

//const col = { color: "green" };
const customCol = {
  color: "orange",
  fontSize: "20 px",
  border: "2px solid blue"
};
// <h3 style={{color:"red"}}>Hello world i am doing great </h3>
ReactDOM.render(
  <div>
    <h3 style={customCol}>Hello world i am doing great </h3>
  </div>,
  document.getElementById("root")
);
