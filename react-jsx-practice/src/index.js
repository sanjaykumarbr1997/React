// var React = require("react");
// var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h2>My favourite games</h2>, document.getElementById("root"));
ReactDOM.render(
  <div>
    <h2>My favourite games</h2>
    <ul>
      <li>GTA 5</li>
      <li>Hill Climbing</li>
      <li>Clash of Clan</li>
    </ul>
  </div>,
  document.getElementById("root")
);
