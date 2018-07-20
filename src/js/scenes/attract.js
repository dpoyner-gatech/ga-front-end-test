import "../../css/scenes/attract.css";

import React, { Component } from "react";

import { Transition } from "react-transition-group";

export default class Attract extends Component {
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
    const { mode, timeout } = this.props;

    return (
      <Transition
        mountOnEnter={true}
        timeout={timeout}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExiting={this.onExiting}
        onExited={this.onExited}
        in={mode === "open" ? true : false}
      >
        <div className={`attract scene ${mode}`}>
          <h1> America's First Presidents </h1>
        </div>
      </Transition>
    );
  }
}

Attract.defaultProps = {
  mode: "open"
};
