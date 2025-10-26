"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";

export default function ProjectHomeFour() {
  return (
    <section className="project-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="section-heading text-center">
              <span className="subtitle"><span>Our Projects</span></span>
              <h2 className="mb-0">Check out Our Most Recent Work</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <Swiper
        loop={true}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{
          el: ".project-pagination",
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            spaceBetween: 40,
          },
        }}
        className="swiper project-swiper" id="projectSwiper">

        {/* <!-- Project Card --> */}
        <SwiperSlide className="swiper-slide">
          <div className="project-card-two">
            <img src="/assets/img/bg-img/66.jpg" alt="" />
            <div className="project-info translateY10">
              <p className="mb-2">Al Horizon</p>
              <Link href="/project-details">
                <h2 className="mb-0">Custom Automation for Healthcare Providers</h2>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- Project Card --> */}
        <SwiperSlide className="swiper-slide">
          <div className="project-card-two">
            <img src="/assets/img/bg-img/67.jpg" alt="" />
            <div className="project-info translateY10">
              <p className="mb-2">Al Horizon</p>
              <Link href="/project-details">
                <h2 className="mb-0">Custom Automation for Healthcare Providers</h2>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- Project Card --> */}
        <SwiperSlide className="swiper-slide">
          <div className="project-card-two">
            <img src="/assets/img/bg-img/68.jpg" alt="" />
            <div className="project-info translateY10">
              <p className="mb-2">Al Horizon</p>
              <Link href="/project-details">
                <h2 className="mb-0">Custom Automation for Healthcare Providers</h2>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- Project Card --> */}
        <SwiperSlide className="swiper-slide">
          <div className="project-card-two">
            <img src="/assets/img/bg-img/66.jpg" alt="" />
            <div className="project-info translateY10">
              <p className="mb-2">Al Horizon</p>
              <Link href="/project-details">
                <h2 className="mb-0">Custom Automation for Healthcare Providers</h2>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- Project Card --> */}
        <SwiperSlide className="swiper-slide">
          <div className="project-card-two">
            <img src="/assets/img/bg-img/67.jpg" alt="" />
            <div className="project-info translateY10">
              <p className="mb-2">Al Horizon</p>
              <Link href="/project-details">
                <h2 className="mb-0">Custom Automation for Healthcare Providers</h2>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* <!-- Project Card --> */}
        <SwiperSlide className="swiper-slide">
          <div className="project-card-two">
            <img src="/assets/img/bg-img/68.jpg" alt="" />
            <div className="project-info translateY10">
              <p className="mb-2">Al Horizon</p>
              <Link href="/project-details">
                <h2 className="mb-0">Custom Automation for Healthcare Providers</h2>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      {/* <!-- Project Pagination --> */}
      <div className="project-pagination"></div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
