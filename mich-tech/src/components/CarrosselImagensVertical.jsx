import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function CarrosselImagensVertical({ produto, func }) {
    
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (produto) {
      const newImages = produto.pictures.map((item) => item.url);
      setImages([...images, ...newImages]);
    }
  }, [produto]);

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="arrow next flex justify-center mt-4 text-2xl cursor-pointer text-[#9b9b9b] hover:text-[#3483fa]  transition-all"
        onClick={onClick}
      >
        <FaChevronDown />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="arrow prev flex justify-center mb-4 text-2xl cursor-pointer text-[#9b9b9b] hover:text-[#3483fa] transition-all"
        onClick={onClick}
      >
        <FaChevronUp />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="flex justify-center items-center min-h-[100%]">
      <div className="w-36 relative flex gap">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div
              key={index}
              className="w-36 h-36 shrink-0 p-2 bg-white border border-[#ebebeb] rounded flex justify-center items-center hover:border-[#3483fa] transition-all cursor-pointer"
              onClick={() => func(index)}
            >
              <img
                src={src}
                className="object-contain w-full h-full"
                alt={`Product ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CarrosselImagensVertical;
