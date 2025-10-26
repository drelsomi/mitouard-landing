"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
 
export default function InterfaceHomeTwo() {
  return (
    <div className="app-screenshots-section bg-secondary">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">App Screenshots</span>
              <h2 className="mb-0">Interactive App Interface Showcase</h2>
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        {/* <!-- App Screenshots Slide --> */}
        <Swiper
          loop={true}
          spaceBetween={48}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.screenshots-pagination',
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            320: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          className="swiper app-screenshots" id="appScreenshotsSlide">

          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/44.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/45.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/46.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/47.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/44.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/45.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/46.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <img src="/assets/img/bg-img/47.png" alt="" />
          </SwiperSlide>

        </Swiper>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        {/* <!-- Screenshots Pagination --> */}
        <div className="screenshots-pagination"></div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
