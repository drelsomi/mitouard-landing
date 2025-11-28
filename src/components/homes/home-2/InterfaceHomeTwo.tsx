"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

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
              <span className="subtitle">Interface</span>
              <h2 className="mb-0">Aperçu de Le Mitouard App</h2>
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
            <Image src="/assets/img/bg-img/44-new.png" alt="" width={1000} height={1000} priority />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image src="/assets/img/bg-img/45-new.png" alt="" width={1000} height={1000} priority />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image src="/assets/img/bg-img/46-new.png" alt="" width={1000} height={1000} priority />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image src="/assets/img/bg-img/47-new2.png" alt="" width={1000} height={1000} priority />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image src="/assets/img/bg-img/44-new.png" alt="" width={1000} height={1000} priority />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image src="/assets/img/bg-img/45-new.png" alt="" width={1000} height={1000} priority />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image src="/assets/img/bg-img/46-new.png" alt="" width={1000} height={1000} priority />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Image src="/assets/img/bg-img/47-new2.png" alt="" width={1000} height={1000} priority />
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
