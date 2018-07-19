import React, { Component } from "react";
import ReactDOM from "react-dom";

import PIXI from "pixi.js";
import { TransitionGroup } from "react-transition-group";

import "./styles.css";

class Application extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Application">
        <TransitionGroup mountOnEnter={true} timeout={1000} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
