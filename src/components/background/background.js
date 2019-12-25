import React, { Component } from "react";
import "./background.css";
import imageSources from './images.json';

let container = null;
let images = imageSources
let _images = []
let imgLoc = ""
let index = 0
let screenWidth = 0

export class Background extends Component {

  componentDidMount() {
    screenWidth = window.screen.width;
    container = document.getElementById("background");
    this.loadImages();
    window.requestAnimationFrame(() => { this.moveImages() });
  }

  getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  preloadImage = (filename) => {
    let img = new Image(300, 500);

    img.xPlane = this.getRandomInRange(-500, screenWidth - 1000);
    img.yPlane = this.getRandomInRange(500, 1000);
    img.zPlane = this.getRandomInRange(300, 2000);
    img.style = "transform: translate3d(" + img.xPlane + "px, " + img.yPlane + "px, -" + img.zPlane + "px);";
    container.appendChild(img);
    imgLoc = "";
    img.src = imgLoc + filename;
    img.alt = "";
    _images[index] = img;
    index++;
  }

  loadImages = () => {
    for (let i = 0; i < images.length; ++i) {
      let filename = images[i];
      this.preloadImage(filename);
    }
  }

  moveImages = () => {
    _images.forEach((image) => {
      image.yPlane = image.yPlane - 2;
      image.style.cssText = "transform: translate3d(" + image.xPlane + "px, " + image.yPlane + "px,  -" + image.zPlane + "px); z-index: " + image.zIndex;
    });
    window.requestAnimationFrame(() => { this.moveImages() });
  }

  render() {
    return (
      <div id="background"></div>
    )
  }
}