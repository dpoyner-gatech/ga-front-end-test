import React, { Component } from "react";
import ReactDOM from "react-dom";

import PIXI from "pixi.js";

import Gallery from "./js/scenes/gallery";
import Attract from "./js/scenes/attract";

import { TransitionGroup } from "react-transition-group";

import "./css/styles.css";

class Application extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="Application">
        <div id="scenes">
          <Attract mode="closed" />
          <Gallery mode="open" />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
