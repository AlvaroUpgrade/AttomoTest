import React from "react";
import Separator from "../Separator/Separator";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery-box">
      <div className="gallery-box-titleAndDesc">
        <h1>Gallery</h1>
        <p>
          Entra y elige la que mejor se adapte a tus necesidades y a tus sueños.
        </p>
      </div>
      <div className="gallery-box-cards">
        <div className="gallery-box-cards-eachCard">
          <img
            src="/assets/images/galleryImg1.png"
            alt="GalleryImg"
          ></img>
        </div>
        <div className="gallery-box-cards-eachCard">
          <img
            src="/assets/images/galleryImg2.png"
            alt="GalleryImg"
          ></img>
        </div>
        <div className="gallery-box-cards-eachCard">
          <img
            src="/assets/images/galleryImg3.png"
            alt="GalleryImg"
          ></img>
        </div>
      </div>
      <Separator></Separator>
    </div>
  );
};

export default Gallery;
