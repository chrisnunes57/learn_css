import React from "react";
import "./CodeEditor.scss";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-css";

const code = `body, html {
  background-color: blue;
}
`;

class CodeEditor extends React.Component {

  state = { code };

  render() {
    return (
      <div className="editorWrapper">
        <Editor
          value={this.state.code}
          onValueChange={(code) => this.setState({ code })}
          highlight={(code) => highlight(code, languages.css)}
          padding={10}
          textareaClassName={"language-css"}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>
    );
  }
}

export default CodeEditor;
