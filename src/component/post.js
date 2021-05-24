import React from "react";
import ImageSlider from './imageSlider'

const post = ({ article }) => {
  console.log("article", article);
  const { name, map, image, description ,images } = article.fields;
  return (
    <div className="post">
      <h2 className="title">{name}</h2>
      <ImageSlider images={images}></ImageSlider>
      {/* {image && (
        <img
          className="featuredImage"
          src={image.fields.file.url}
          alt={name}
          title={name}
        />
      )} */  }
      <section>{description}</section>
    </div>
  );
};

export default post;
