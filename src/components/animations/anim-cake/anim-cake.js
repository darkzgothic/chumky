import React, { Component } from "react";
import "./anim-cake.css";
import Lottie from 'react-lottie';
import * as animationData from './anim.json'

export class AnimatedCake extends Component {

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return (
      <div className="anim-cake-container">
        <Lottie options={defaultOptions}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false} />
      </div>
    )
  }
}