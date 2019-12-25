import React, { Component } from "react";
import { AnimatedBallon } from '../animations/anim-ballon/anim-ballon';
import { AnimatedCake } from '../animations/anim-cake/anim-cake';
import { Ballon } from '../ballon/ballon';
import { Card } from '../card/card';
import "./content.css";

export class Content extends Component {
  render() {
    return (
      <div>
        <Ballon />
        <AnimatedBallon />
        <AnimatedCake />
        <Card />
      </div>
    )
  }
}