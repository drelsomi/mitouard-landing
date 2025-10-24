"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css"; 
import "swiper/css/navigation";  
import Link from "next/link";
import service_data from "@/data/service-data";



export default function HowWeWorkHomeOne() {
  return (
    <section className="how-works-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-end justify-content-between">
          <div className="col-12 col-sm-6 col-xxl-5">
            <div className="section-heading">
              <span className="subtitle">How It Works</span>
              <h2 className="mb-0">Boost Productivity With Access.</h2>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xxl-5">
            <div className="section-heading">
              <p className="mb-0">We specialize in helping individuals and families regain control of their
                financial
                future by repairing and improving their credit scores team of experts is dedicated.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-sm-5">
            <div className="section-heading translateY10 pe-xxl-5">
              <img src="/assets/img/bg-img/35.jpg" alt="" />
            </div>
          </div>

          <div className="col-12 col-sm-7">
            <div className="how-works-section">
              {/* <!-- Get Started Button --> */}
              <Link href="/services" className="get-started-btn">
                <h6 className="mb-0">Get Started</h6>
                <span><i className="ti ti-arrow-right"></i></span>
              </Link>

              {/* <!-- Divider --> */}
              <div className="divider-sm"></div>

              {/* <!-- Service Swiper --> */}
              <Swiper
                loop={true}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  el: ".service-pagination",
                  clickable: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, Navigation]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  }
                }}
                className="swiper service-swiper" id="serviceSwiper">
                {service_data.map((item, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="service-card">
                      {/* <!-- Shape --> */}
                      <div className="shape">
                        <img src="/assets/img/core-img/shape7.png" alt="" />
                      </div>
                      <div className="service-icon">
                        <i className={`${item.icon}`}></i>
                      </div>
                      <h4 className="mb-4">{item.title}</h4>
                      <p className="mb-0">{item.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
                
              </Swiper>

              {/* <!-- Service Pagination --> */}
              <div className="service-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
