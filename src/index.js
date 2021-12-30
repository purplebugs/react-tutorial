import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <>
      <div>
        <h3>Hello people</h3>
        <ul>
          <li>
            <a href="#">Hello world</a>
          </li>
        </ul>
      </div>
    </>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello world")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
