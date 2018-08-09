import React, { Component } from "react";
import { Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import PropTypes from "prop-types";
// import { animationPhases } from "../utils";

export class Presidents extends Component {
  state = {
    xPosition: this.props.width + 720,
    rotate: 0,
    phase: 1,
    ease: 0
  };

  //resetAnimation() {
  //   this.setState({
  //     xPosition: this.props.width + 720,
  //     rotate: 0,
  //     phase: 1,
  //     ease: 0
  //   });
  //   animationPhases(this, [
  //     { delay: 1000, phase: 2 },
  //     { delay: 1500, phase: 3 },
  //     { delay: 200, phase: 4 }
  //   ]);
  // }
  // componentDidMount() {
  //   this.context.app.ticker.add(this.animate);
  //   this.resetAnimation();
  // }

  // componentWillReceiveProps(newProps) {
  //   switch (newProps.transitionMode) {
  //     case "entering":
  //       this.resetAnimation();
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // componentWillUnmount() {
  //   this.context.app.ticker.remove(this.animate);
  // }

  // animate = delta => {
  //   const { xPosition, rotate, phase, ease } = this.state;

  //   switch (phase) {
  //     case 1:
  //       this.setState({
  //         xPosition: xPosition - 0.2 * delta * ease,
  //         rotate: rotate - 0.0001 * delta * ease,
  //         ease: ease + 0.1
  //       });
  //       break;
  //     case 2:
  //       break;
  //     case 3:
  //       this.setState({
  //         xPosition: xPosition + 1.2 * delta * ease,
  //         rotate: rotate + 0.00006 * delta * ease,
  //         ease: ease + 2
  //       });
  //       break;
  //     default:
  //       return null;
  //   }
  // };

  render() {
    const centerAnchor = new PIXI.Point(0, 0);
    const { height, width, imageURL } = this.props;
    const { xPosition, rotate } = this.state;
    return (
      <Sprite
        scale={1}
        x={0}
        y={0}
        anchor={centerAnchor}
        texture={PIXI.Texture.fromImage("/images/adams.jpg")}
      />
    );
  }
}

Presidents.contextTypes = {
  app: PropTypes.object
};
