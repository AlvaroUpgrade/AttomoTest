import React from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Separator from "../Separator/Separator";
import "swiper/css";
import "swiper/css/pagination";
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
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".pagination",
            clickable: true,
          }}
          slidesPerView={3}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@0.50": {
              slidesPerView: 1.25,
              spaceBetween: 25,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            "@1.25": {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="gallery-box-cards-eachCard">
              <img src="/assets/images/galleryImg1.png" alt="GalleryImg"></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-box-cards-eachCard">
              <img src="/assets/images/galleryImg2.png" alt="GalleryImg"></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-box-cards-eachCard">
              <img src="/assets/images/galleryImg3.png" alt="GalleryImg"></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-box-cards-eachCard">
              <img src="/assets/images/galleryImg2.png" alt="GalleryImg"></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-box-cards-eachCard">
              <img src="/assets/images/galleryImg1.png" alt="GalleryImg"></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gallery-box-cards-eachCard">
              <img src="/assets/images/galleryImg3.png" alt="GalleryImg"></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="pagination"></div>
      <Separator></Separator>
    </div>
  );
};

export default Gallery;
