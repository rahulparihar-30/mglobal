import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          // optional
    autoplaySpeed: 3000,     // optional
    
  };

  return (
    <div id="carousel" className="w-full mt-15 h-100 text-green">
      <Slider {...settings} className="h-full bg-green">
        <div className="bg-red-400 h-100">
            <button className="border-2 border-gold text-white font-bold m-10 p-2 rounded hover:bg-gold cursor-pointer" >Open Now</button>
        </div>
        <div className="bg-yellow-300 h-100"></div>
        <div className="bg-green-300 h-100"></div>
        <div className="bg-white h-100"></div>
        <div className="bg-amber-700 h-100"></div>
      </Slider>
    </div>
  );
};

export default Hero;
