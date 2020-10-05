import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/about/about";
import { Route, BrowserRouter } from "react-router-dom";
import TodoAbout from "./components/TodoAbout/TodoAbout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:todo_id" component={TodoAbout} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
