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
        <button onClick={(e) => this.format("bold", "")}>Bold</button>
        <button onClick={(e) => this.format("italic", "")}>Italics</button>
        <button onClick={(e) => this.format("insertUnorderedList", "")}>
          List
        </button>
        <button onClick={(e) => this.addLink()}>Link</button>
        <div
          //   onMouseUpCapture={this.mosdd}
          ref={this.inputRef}
          className="hidden"
        >
          <input ref={this.txtFormatUrl} placeholder="url" />
          <button onClick={(e) => this.setUrl(e)}>Create Link</button>
        </div>
        <input
          onChange={({ target }) => this.format("foreColor", target.value)}
          type="color"
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
