import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Slider/slider.css";
import "./slider.css"

// API Data > api
import {sliderAPI} from "../../utils/apis";


const SimpleSlider = () => {  
  
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings} >
         {sliderAPI ?. map(({alt, img}) => 
           <div>
             <img className="sliderImage" src={img} alt={alt} />
           </div>
         )}
        </Slider>
      </div>
    );
}

export default SimpleSlider;
