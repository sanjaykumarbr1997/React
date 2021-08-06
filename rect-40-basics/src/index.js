// var React = require("react");
// var ReactDOM = require("react-dom");
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h3>Hello world i am doing great </h3>,
  document.getElementById("root")
);
//Suppose we need 2 tags,that we cant give back to back ,u must use div tag
ReactDOM.render(
  <div>
    <h3>Hello world i am doing great </h3>
    <p>paragraph element</p>
  </div>,
  document.getElementById("root")
);
