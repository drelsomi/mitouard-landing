"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; 
import "swiper/css/navigation";

interface BrandItem {
  id: number;
  img: string;
}

const brands_data: BrandItem[] = [
  {
    id: 1,
    img: "/assets/img/partner-img/1.png",
  },
  {
    id: 2,
    img: "/assets/img/partner-img/2.png",
  },
  {
    id: 3,
    img: "/assets/img/partner-img/3.png",
  },
  {
    id: 4,
    img: "/assets/img/partner-img/4.png",
  },
  {
    id: 5,
    img: "/assets/img/partner-img/5.png",
  },
  {
    id: 6,
    img: "/assets/img/partner-img/1.png",
  },
  {
    id: 7,
    img: "/assets/img/partner-img/2.png",
  },
  {
    id: 8,
    img: "/assets/img/partner-img/3.png",
  },
  {
    id: 9,
    img: "/assets/img/partner-img/4.png",
  },
  {
    id: 10,
    img: "/assets/img/partner-img/5.png",
  },
];

export default function PricingHomeFour() {
  return (
    <section className="pricing-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 g-lg-4">
          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-md-7 col-lg-4">
            <div className="section-heading">
              <span className="subtitle">Our Pricing Plan</span>
              <h2 className="mb-4">Choose A Plan Your Need</h2>
              <p className="mb-5">We are a team of dedicated professionals with decades of experience industries.
              </p>
              <a href="#" className="btn btn-primary">
                <span>View All More <i className="ti ti-arrow-up-right"></i></span>
                <span>View All More <i className="ti ti-arrow-up-right"></i></span>
              </a>
            </div>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div className="pricing-card style-three fadeInUp" data-delay="0.5">
              {/* <!-- Pricing Header --> */}
              <div className="pricing-header">
                <h4>Popular</h4>
                <p>Scale your software operations through a custom engineering team.</p>
                <h2 className="mb-0">$155<span>/Monthly</span></h2>
              </div>
              {/* <!-- Pricing Footer --> */}
              <div className="pricing-footer">
                <a href="#" className="btn btn-light w-100">
                  <span>Choose Package <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                  <span>Choose Package <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                </a>
              </div>
              {/* <!-- Pricing Content --> */}
              <ul className="pricing-content list-unstyled">
                <li><span className="yes"></span> Limited Access Library</li>
                <li><span className="yes"></span> Commercial License</li>
                <li><span className="yes"></span> Hotline Support 24/7</li>
                <li><span className="no"></span> Updates for 1 Year</li>
              </ul>
            </div>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div className="pricing-card style-three fadeInUp" data-delay="0.6">
              {/* <!-- Pricing Header --> */}
              <div className="pricing-header">
                <h4>Premium</h4>
                <p>Scale your software operations through a custom engineering team.</p>
                <h2 className="mb-0">$355<span>/Monthly</span></h2>
              </div>
              {/* <!-- Pricing Footer --> */}
              <div className="pricing-footer">
                <a href="#" className="btn btn-light w-100">
                  <span>Choose Package <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                  <span>Choose Package <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                </a>
              </div>
              {/* <!-- Pricing Content --> */}
              <ul className="pricing-content list-unstyled">
                <li><span className="yes"></span> Limited Access Library</li>
                <li><span className="yes"></span> Commercial License</li>
                <li><span className="yes"></span> Hotline Support 24/7</li>
                <li><span className="yes"></span> Updates for 1 Year</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- Partner Content --> */}
      <div className="container">
        <div className="partner-content">
          <p className="mb-0">Trusted Clients:</p>

          {/* <!-- Partner Swiper --> */}
          <Swiper
            loop={true}
            spaceBetween={24}
            slidesPerView={5}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
            }}
            className="swiper partner-swiper" id="partnerSwiper">
            {brands_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <a href="#">
                  <img src={item.img} alt={`Brand ${item.id}`} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
