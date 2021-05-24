import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  console.log("images", images);
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={prevSlide}
      ></FaArrowAltCircleLeft>
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={nextSlide}
      ></FaArrowAltCircleRight>
      {images.map((img, index) => (
        //   return (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img
              className="featuredImage"
              src={img.fields.file.url}
              alt="travel image"
              title="travel image"
            />
          )}
        </div>
        //   );
      ))}
    </section>
  );
};

export default ImageSlider;
