import React from "react";
import ReactDOM from "react-dom";
import PI, { double, triple } from "./Math";
//import * as pi from "./Math";

ReactDOM.render(
  <div>
    <ul>
      <li>{PI}</li>
      {/* <li>{pi.default}</li> */}
      <li>{double()}</li>
      {/* <li>{pi.double()}</li> */}
      <li>{triple()}</li>
      {/* <li>{pi.triple()}</li> */}
    </ul>
  </div>,
  document.getElementById("root")
);
