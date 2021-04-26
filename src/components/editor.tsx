import "./editor.css";
import { createRef, useEffect, useCallback, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedText } from "../redux/Actions/editorActions";
import { RootState } from "../redux";
import Toolbar from "./toolBar";

const Editor = () => {
  // acces redux store
  const { selectedText } = useSelector((state: RootState) => state.editor);
  const dispatch = useDispatch();
  //set selected text to redux store and useCallback use for memorized function
  const onMouseUp = useCallback(() => {
    const text: string = window.getSelection().toString();
    if (selectedText !== text) dispatch(addSelectedText(text));
  }, []);

  const editorRef = createRef<HTMLDivElement>();

  useEffect(() => {
    // call event listners
    keyDownListner();
    keyUpListner();

    // remove event listners
    return () => {
      document.removeEventListener("keydown", keyDownListner);
      document.removeEventListener("keyup", keyUpListner);
    };
  }, []);

  // useCallback use for memorized function add key up function
  const keyUpListner = useCallback(
    () =>
      document.addEventListener(
        "keydown",
        (event) => {
          if (event.keyCode === 17) {
            editorRef.current.contentEditable = "false";
          }
        },
        false
      ),
    []
  );
  // useCallback use for memorized function and keydown listner function
  const keyDownListner = useCallback(
    () =>
      document.addEventListener(
        "keyup",
        (event) => {
          if (event.keyCode === 17) {
            editorRef.current.contentEditable = "true";
          }
        },
        false
      ),
    []
  );

  return (
    <Fragment>
      <Toolbar />
      <div
        id="title"
        contentEditable="true"
        data-placeholder="Text ..."
        className="page-wrapper"
        onMouseUp={onMouseUp}
        ref={editorRef}
      ></div>
    </Fragment>
  );
};

export default Editor;
