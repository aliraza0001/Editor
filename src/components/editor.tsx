import React from "react";
import Toolbar from "./toolBar";
import "./editor.css";
export default function Editor() {
  const onMouseUp = () => {
    const text = window.getSelection().toString();
    console.log({ text });
  };
  return (
    <React.Fragment>
      <Toolbar />
      <div
        id="title"
        contentEditable="true"
        data-placeholder="Title..."
        className="title"
        onMouseUp={onMouseUp}
      ></div>
    </React.Fragment>
  );
}
