import React from "react";
import ReactDOM from "react-dom";
const singer = "Knaan";
const country = "Africa";
const year = 2020;
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>When i get older</p>
    <p>I will be stronger</p>
    <p>singer</p>
    <p>country is {country}</p>
    <p>copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
