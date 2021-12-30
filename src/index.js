import React from "react";
import ReactDom from "react-dom";

// function Greeting() {
//   return <h4>This is Anita and this is my first component</h4>;
// }

const Greeting = () => {
  return React.createElement("h1", {}, "Hello world");
};

ReactDom.render(<Greeting />, document.getElementById("root"));
