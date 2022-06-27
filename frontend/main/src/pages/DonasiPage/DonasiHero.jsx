import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import sekolah1 from "./images/sekolah1.png";





let count = 0;
let slideInterval;

const insiderItems = [
    sekolah1
];

export default function HeroDonasi(){
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const slideRef = useRef();
  
    const removeAnimation = () => {
      slideRef.current.classList.remove("fade-anim");
      
    };
  
    useEffect(() => {
      slideRef.current.addEventListener("animationend", removeAnimation);
      slideRef.current.addEventListener("mouseenter", pauseSlider);
      slideRef.current.addEventListener("mouseleave", startSlider);
  
      startSlider();
      return () => {
        pauseSlider();
      };
      // eslint-disable-next-line
    }, []);
  
    const startSlider = () => {
      slideInterval = setInterval(() => {
        handleOnNextClick();
      }, 3000);
    };
  
    const pauseSlider = () => {
      clearInterval(slideInterval);
    };
  
    const handleOnNextClick = () => {
      count = (count + 1) % insiderItems.length;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
    const handleOnPrevClick = () => {
      const productsLength = insiderItems.length;
      count = (currentIndex + productsLength - 1) % productsLength;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
  
    return (
      <div ref={slideRef} className="w-screen select-none relative">
        <div className="aspect-w-16 aspect-h-9">
          <img src={insiderItems[currentIndex]} alt="images" />
        </div>
  
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-20 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <FontAwesomeIcon icon={faArrowLeft}/>
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-20 cursor-pointer hover:bg-Faiopacity-100 transition"
            onClick={handleOnNextClick}
          >
            <FontAwesomeIcon icon={faArrowRight}/>
          </button>
        </div>
      </div>
    );
  }