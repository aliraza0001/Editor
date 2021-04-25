import React, { PureComponent, createRef } from "react";
import "./toolbar.css";

class toolBar extends PureComponent<{}, toolBarState> {
  private inputRef = createRef<HTMLDivElement>();
  private txtFormatUrl = createRef<HTMLInputElement>();
  private colorInputRef = createRef<HTMLInputElement>();

  state: toolBarState = {
    active: [],
    selected: "",
  };

  format = (com: any, val: any) => {
    document.execCommand(com, false, val);
    console.log(com, val);
    if (com === "foreColor") this.colorInputRef.current.value = "";

    // document.execCommand("undo", false, val);
  };
  addLink = () => {
    const show = this.inputRef.current;
    if (show.classList.contains("hidden")) {
      show.classList.remove("hidden");
    } else {
      show.classList.add("hidden");
    }
  };

  setUrl = (e: any) => {
    e.preventDefault();
    const txtFormatUrl = this.txtFormatUrl.current;
    console.log(txtFormatUrl.value);
    const show = this.inputRef.current;
    this.format(
      "createLink",
      `<a href='${txtFormatUrl.value}' target='_blank'></a>`
    );
    txtFormatUrl.value = "";
    show.classList.add("hidden");
  };

  render() {
    return (
      <div className="toolbar">
        <button className="active" onClick={(e) => this.format("bold", "")}><i className="fas fa-bold"></i></button>
        <button className="active" onClick={(e) => this.format("italic", "")}><i className="fas fa-italic"></i></button>
        <button className="active" onClick={(e) => this.format("insertUnorderedList", "")}>
          <i className="fas fa-list-ul"></i>
        </button>
        <button className="active" onClick={(e) => this.addLink()}>
          <i className="fas fa-link"></i>
          <div
            //   onMouseUpCapture={this.mosdd}
            ref={this.inputRef}
            className="hidden link-picker"
          >
            <input ref={this.txtFormatUrl} placeholder="url" />
            <button onClick={(e) => this.setUrl(e)}><i className="fas fa-plus"></i></button>
          </div>
        </button>
        <input
          onChange={({ target }) => this.format("foreColor", target.value)}
          type="color"
          className="color-picker"
          ref={this.colorInputRef}
        />
      </div>
    );
  }
}

type toolBarState = {
  selected: String;
  active: Array<string>;
};

export default toolBar;
