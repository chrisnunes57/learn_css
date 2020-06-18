import React from "react";
import "./CodeEditor.scss";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";
import { parseCSS, wrapCSS } from "../../utils.js";

const code = `.code-result {
  background-color: #E5F0FF;
}

p {
  font-size: 30px;
}
`;

class CodeEditor extends React.Component {

  state = { code };
  stylesheet = document.createElement("style");

  componentDidMount() {
    document.head.appendChild(this.stylesheet);
    this.addStyle(this.state.code);
  }


  addStyle(styles) {

    let rules = parseCSS(styles);
    styles = wrapCSS(rules, "code-result--wrapper");

    this.stylesheet.textContent = styles;
  }


  handleChange(code) {
    this.setState({ code });
    this.addStyle(code);
  }

  render() {
    return (
      <div className="editor-wrapper">
        <Editor
          value={this.state.code}
          onValueChange={(code) => this.handleChange(code)}
          highlight={(code) => highlight(code, languages.css)}
          padding={10}
          textareaClassName={"language-css"}
          preClassName={"code"}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 16,
          }}
        />
        <div className="code-result--wrapper">
          <div className="code-result">
            <div className="code-result--content">
              <p>code result!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CodeEditor;
