import React from "react";
import Editor from "./components/editor";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Editor />
    </div>
  );
}
export default App;


// import React from "react";
// import "./App.css";
// class App extends React.Component {
//   // constructor() {
//   //   super();
//   // }
//   private inputRef = React.createRef<HTMLTextAreaElement>();
//   private outputRef = React.createRef<HTMLDivElement>();
//   state = {
//     bold: false,
//     italized: false,
//     underlined: false,
//   };

//   onBoldClick = (event: any) => {
//     // this.setState({ bold: !this.state.bold });
//     // event.target.setAttribute("class", this.state.bold ? "Selected" : "");
//     event.target.setAttribute("class", !this.state.bold ? "Selected" : "");
//     if (!this.state.bold) {
//       this.outputRef.current.innerHTML += "<strong></strong>";
//     }
//     this.setState({
//       bold: !this.state.bold,
//     });
//     this.inputRef.current.focus();
//   };
//   onItalicsClick = (event: any) => {
//     this.setState({ italized: this.state.italized });
//     event.target.setAttribute("class", this.state.italized ? "Selected" : "");
//   };
//   onUnderlineClick = (event: any) => {
//     this.setState({ underlined: !this.state.underlined });
//     event?.target?.setAttribute(
//       "class",
//       !this.state.underlined ? "Selected" : ""
//     );
//   };

//   onInputChange = () => {
//     const input = this.inputRef.current.value;
//     const output = this.outputRef.current.innerText;
//     if (input.length > output.length) {
//       const newText = input.slice(output.length);
//       this.formatText(newText);
//     } else {
//       this.transferText();
//     }
//   };

//   transferText = () => {
//     const input = this.inputRef.current.value;
//     const output = this.outputRef.current.innerHTML;
//     let inputCounter = input.length - 1,
//       outputCounter = output.length - 1,
//       isTag = false;
//     while (outputCounter > -1) {
//       // If the current character is '>', then we are in a HTML tag. Skip until we get to '<'.
//       if (output[outputCounter] === ">") {
//         isTag = true;
//         outputCounter -= 1;
//         continue;
//       }
//       if (isTag) {
//         isTag = output[outputCounter] !== "<";
//         outputCounter -= 1;
//         continue;
//       }
//       // If inputCounter <= -1, then there is no more text to add to the output, so break.
//       if (inputCounter <= -1) {
//         this.outputRef.current.innerHTML = this.outputRef.current.innerHTML.slice(
//           outputCounter + 1
//         );
//         break;
//       }
//       // Otherwise, replace the text in the output with the corresponding text in the text area.
//       else {
//         let temp = this.outputRef.current.innerHTML;
//         temp =
//           temp.slice(0, outputCounter) +
//           input[inputCounter] +
//           temp.slice(outputCounter + 1);
//         this.outputRef.current.innerHTML = temp;
//         inputCounter -= 1;
//         outputCounter -= 1;
//       }
//     }
//   };

//   formatText = (text: String) => {
//     switch (true) {
//       case this.state.bold:
//         const allBold = this.outputRef.current.getElementsByTagName("strong");
//         const lastBold = allBold[allBold.length - 1];
//         lastBold.innerText += text;
//         break;
//       case this.state.italized:
//         const allItalized = this.outputRef.current.getElementsByTagName("em");
//         const lastItalized = allItalized[allItalized.length - 1];
//         lastItalized.innerText += text;
//         break;
//       case this.state.underlined:
//         const allUnderlined = this.outputRef.current.getElementsByTagName("u");
//         const lastUnderlined = allUnderlined[allUnderlined.length - 1];
//         lastUnderlined.innerText += text;
//         break;
//       default:
//         this.outputRef.current.innerHTML += text;
//         break;
//     }
//   };

//   render() {
//     return (
//       <header className="App-header">
//         <div ref={this.outputRef}></div>
//         <span className="Controls">
//           <button onClick={this.onBoldClick}>
//             <strong>B</strong>
//           </button>
//           <button onClick={this.onItalicsClick}>
//             <em>I</em>
//           </button>
//           <button onClick={this.onUnderlineClick}>
//             <u>U</u>
//           </button>
//         </span>
//         <textarea
//           rows={5}
//           className="Text"
//           ref={this.inputRef}
//           onChange={this.onInputChange}
//         />
//       </header>
//     );
//   }
// }
// export default App;
