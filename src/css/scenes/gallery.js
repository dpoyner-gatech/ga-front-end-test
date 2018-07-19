import React, { Component } from "react";

import "../../css/scenes/gallery.css";

import PIXI from "pixi.js";
import { TransitionGroup } from "react-transition-group";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.onEntering = this.onEntering.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onEntered = this.onEntered.bind(this);
  }

  componentDidMount() {}

  onEntering() {}
  onEntered() {}
  onExited() {}
  onExiting() {}

  render() {
    return (
      <TransitionGroup
        mountOnEnter={true}
        timeout={1000}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExiting={this.onExiting}
        onExited={this.onExited}
      >
        <div className="gallery scene" />
      </TransitionGroup>
    );
  }
}
