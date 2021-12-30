import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello world");
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
