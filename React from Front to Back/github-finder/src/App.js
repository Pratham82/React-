import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const name = "Prathamesh";
    const foo = () => "bar";
    const loading = true;
    return (
      <div className="App">
        {loading && <h2>Github finder</h2>}
        {name && <h2>Hello {name} How are you?</h2>}
        <h2> Hello {foo()}</h2>{" "}
      </div>
    );
  }
}

export default App;
