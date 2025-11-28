"use client";

import VideoPopup from "@/modal/VideoPopup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
 
const slides = [
  { id: 1, image: "/assets/img/bg-img/63.jpg", video: "https://youtu.be/zCSmY_WjvPs" },
  { id: 2, image: "/assets/img/bg-img/64.jpg", video: "https://youtu.be/zCSmY_WjvPs" },
  { id: 3, image: "/assets/img/bg-img/65.jpg", video: "https://youtu.be/zCSmY_WjvPs" },
];

export default function VideoHomeFour() {
  return (
    <div className="video-gallery-section" >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop
        slidesPerView={1}
        speed={500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".video-gallery-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-image: url('${slides[index].image}')"></span>`;
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="swiper-slide video-gallery-card jarallax" 
            style={{ backgroundImage: `url(${slide.image})` , height: "100vh" }}
            
          >
            <div className="container h-100">
              <div className="row h-100 align-items-center justify-content-center">
                <div className="col-8 offset-4">
                  <VideoPopup>
                    <div className="play-video-btn video-btn" data-video={slide.video}>
                      <div className="icon">
                        <i className="ti ti-player-play-filled"></i>
                      </div>
                      <div className="video-sonar"></div>
                    </div>
                  </VideoPopup>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="video-gallery-pagination-wrapper">
          <div className="video-gallery-pagination" />
        </div>
      </Swiper>
    </div>
  );
}