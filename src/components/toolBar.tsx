import { Component, createRef } from "react";
import { connect } from "react-redux";
import { RootState } from "../redux";
import { addSelectedText } from "../redux/Actions/editorActions";
import "./toolbar.css";

class toolBar extends Component<toolBarProps, toolBarState> {
  // create ref
  private inputRef = createRef<HTMLDivElement>();
  private txtFormatUrl = createRef<HTMLInputElement>();
  private colorInputRef = createRef<HTMLInputElement>();
  private boldBtn = createRef<HTMLButtonElement>();
  private italicsBtn = createRef<HTMLButtonElement>();
  private list = createRef<HTMLButtonElement>();

  //handel action base on toolbar selection
  format = (com: any, val: any) => {
    document.execCommand(com, false, val);
    switch (com) {
      case "italic":
        const italic = this.italicsBtn.current;
        if (!italic.classList.contains("active"))
          italic.classList.add("active");
        else italic.classList.remove("active");
        break;
      case "bold":
        const bold = this.boldBtn.current;
        if (bold.classList.contains("active")) bold.classList.remove("active");
        else bold.classList.add("active");
        break;
      case "insertUnorderedList":
        const list = this.list.current;
        if (list.classList.contains("active")) list.classList.remove("active");
        else list.classList.add("active");
        break;
      default:
        break;
    }
  };

  // open a link wrapper
  addLink = () => {
    const show = this.inputRef.current;
    if (show.classList.contains("hidden")) show.classList.remove("hidden");
    else show.classList.add("hidden");
  };

  // add link to selected text
  setUrl = (e: any) => {
    e.preventDefault();
    const txtFormatUrl = this.txtFormatUrl.current;
    const show = this.inputRef.current;
    this.format("createLink", `http://${txtFormatUrl.value}`);
    txtFormatUrl.value = "";
    show.classList.add("hidden");
    this.props.removeSelectedText();
  };

  render() {
    const { selectedText } = this.props;
    return (
      <div className="toolbar">
        <button ref={this.boldBtn} onClick={() => this.format("bold", "")}>
          <i className="fas fa-bold"></i>
        </button>
        <button ref={this.italicsBtn} onClick={() => this.format("italic", "")}>
          <i className="fas fa-italic"></i>
        </button>
        <button
          ref={this.list}
          onClick={() => this.format("insertUnorderedList", "")}
        >
          <i className="fas fa-list-ul"></i>
        </button>
        <div className="link-wrapper">
          <button onClick={this.addLink}>
            <i className="fas fa-link"></i>
          </button>
          <div ref={this.inputRef} className="hidden link-picker">
            <input ref={this.txtFormatUrl} placeholder="url" />
            <button className="active" onClick={(e) => this.setUrl(e)}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <input
          onChange={({ target }) => this.format("foreColor", target.value)}
          type="color"
          className="color-picker"
          ref={this.colorInputRef}
        />
        <div className='selected-text'>
          <p>Selected Text: </p>
          <p>{selectedText}</p>
        </div>
      </div>
    );
  }
}

type toolBarState = {
  selected: String;
  active: Array<string>;
};
type toolBarProps = {
  selectedText: String;
  removeSelectedText: Function;
};

const mapStateToProps = (state: RootState) => ({
  selectedText: state.editor.selectedText,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeSelectedText: () => dispatch(addSelectedText("")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(toolBar);
