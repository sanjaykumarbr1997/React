import React from "react";
var wish;
var hourNow = new Date();
const colorComp = { color: " " };
if (hourNow.getHours() > 12 && hourNow.getHours() < 18) {
  wish = "Good Afternoon";
  colorComp.color = "green";
} else if (hourNow.getHours() >= 18 && hourNow.getHours() < 24) {
  wish = "Good Evening";
  colorComp.color = "blue";
} else {
  wish = "Good Morning";
  colorComp.color = "red";
}
function Heading() {
  return <h1 style={colorComp}> {wish} </h1>;
}
export default Heading;
