import React from "react";
import ReactDOM from "react-dom";

var style = {
  backgroundColor: "teal",
  color: "white",
  font: "Arial",
};

ReactDOM.render(
  <div style={style}>
    <h1 id="heading-element">Hello World</h1>
    <p>Glad you're here.</p>
  </div>,

  document.getElementById("root")
);
