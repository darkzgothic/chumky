import React, { Component } from "react";
import "./card.css";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="back"></div>
        <div className="front">
          <div className="cover-shape-large">
            <div className="shape-diamond"></div>
            <div className="shape-block"></div>
          </div>
          <div className="cover-shape-small">
            <div className="shape-diamond"></div>
            <div className="shape-block">
              <div className="cake">
                <div className="layer layer-bottom"></div>
                <div className="layer layer-middle"></div>
                <div className="layer layer-top"></div>
                <div className="icing"></div>
                <div className="drip drip1"></div>
                <div className="drip drip2"></div>
                <div className="drip drip3"></div>
                <div className="candle">
                  <div className="flame"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-container">
          <p id="head">Happy Birthday Chumky!</p>
          <p>You are the only reason why I breathe, you are the best thing in my life. I love you so much. Happy birthday!</p>
        </div>
      </div>
    )
  }
}