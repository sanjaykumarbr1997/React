import React from "react";
import ReactDOM from "react-dom";

const age = 24;
const name = "Sanjay";
const lname = "Kumar";
const place = "Bangalore";
const state = "Karnataka";
ReactDOM.render(
  <div>
    <h2>
      I am {name} {lname}
    </h2>
    <h2>I am {name + "  " + lname}</h2>
    <h3> I am {age} years old</h3>
    <h4> I grauated in {2014 + 4}</h4>
    {/* ES TEMPLATE  */}
    <h4>I live in {`${place} , ${state}`}</h4>
    <h5>Random number is {Math.floor(Math.random() * 10)}</h5>
  </div>,
  document.getElementById("root")
);
