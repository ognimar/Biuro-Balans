import React, { useState, useEffect } from "react";
import "./Slider.css";

import dataSlider from "./dataSlider";

export default function Slider() {
  /* const [slideIndex, setSlideIndex] = useState(0); */
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = dataSlider.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 4200;

  /* const moveDot = (index) => {
    setSlideIndex(index);
  }; */

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  /* function auto() {
    slideInterval = setInterval(moveDot, intervalTime);
  } */

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={currentSlide === index ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
          </div>
        );
      })}
      
    </div>
  );
}
