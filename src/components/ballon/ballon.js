import React, { Component } from "react";
import "./ballon.css";

export class Ballon extends Component {
  render() {
    return (
      <div className="ballon-container">
        <div className="balloon">
          <div><span>☺</span>
          </div>
          <div><span>B</span>
          </div>
          <div><span>D</span>
          </div>
          <div><span>A</span>
          </div>
          <div><span>Y</span>
          </div>
          <div><span>!</span>
          </div>
        </div>
      </div>
    )
  }
}