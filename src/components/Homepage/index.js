import React from "react";
import "./Homepage.scss";
import CodeEditor from "../CodeEditor";

class Homepage extends React.Component {

  render() {
    return (
      <section className="main">
          <CodeEditor />
      </section>
    );
  }
}

export default Homepage;
