import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // optional
    autoplaySpeed: 8000, // optional
  };

  return (
    <div id="carousel" className="w-full  h-150 text-green">
      <Slider {...settings} className="h-full bg-green">
        <div className="bg-red-400 h-150">
          <video
            autoPlay
            loop
            muted
            className="object-cover w-full h-full object-top"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="bg-yellow-300 backdrop-blur h-150">
          <img src="/forex.jpg" alt="Hero Image" className="w-full h-full object-cover object-top" />
        </div>
        <div className="bg-green-300 backdrop-blur h-150">
          <img src="/f2.jpg" alt="Hero Image" className="w-full h-full object-cover object-top" />
        </div>
        <div className="bg-white backdrop-blur h-150">
          <img src="/c2.jpg" alt="Hero Image" className="w-full h-full object-cover object-top" />
        </div>
        <div className="bg-amber-700 backdrop-blur  h-150">
          <img src="/hero5.jpg" alt="Hero Image" className="w-full h-full object-cover object-top" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
