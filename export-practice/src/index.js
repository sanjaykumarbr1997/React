import React from "react";
import ReactDOM from "react-dom";
import * as Calc from "./calculator";

ReactDOM.render(
  <div>
    <ul>
      <li>{Calc.add(2, 4)}</li>
      <li>{Calc.multiply(5, 6)}</li>
      <li>{Calc.subtract(4, 3)}</li>
      <li>{Calc.divide(4, 3)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
