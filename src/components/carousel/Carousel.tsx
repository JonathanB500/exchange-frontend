import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicImage from "../basic-image/BasicImage";
import './Carousel.css'

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="carousel-item">
        <BasicImage src="https://th.bing.com/th/id/R.dd1fbd02b5730032412165f87c5eeca3?rik=saqtCjrilZSFxg&pid=ImgRaw&r=0" alt="Amazon"></BasicImage>
      </div>
      <div className="carousel-item">
        <BasicImage src="https://th.bing.com/th/id/OIP.BQQGOuemJxJpuY3hNHEfxQAAAA?rs=1&pid=ImgDetMain" alt="Money"></BasicImage>
      </div>
    </Slider>
  );
}