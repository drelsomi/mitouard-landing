"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const brands = [
  "/assets/img/partner-img/1.png",
  "/assets/img/partner-img/2.png",
  "/assets/img/partner-img/3.png",
  "/assets/img/partner-img/4.png",
  "/assets/img/partner-img/5.png",
  "/assets/img/partner-img/1.png",
  "/assets/img/partner-img/2.png",
  "/assets/img/partner-img/3.png",
  "/assets/img/partner-img/4.png",
  "/assets/img/partner-img/5.png",
];


export default function PricingHomeTwo() {
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
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="pricing-card style-three translateY10 fadeInUp" data-delay="0.5">
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
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="pricing-card style-three translateY10 fadeInUp" data-delay="0.6">
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
            spaceBetween={30}
            slidesPerView={5}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="swiper partner-swiper" id="partnerSwiper">
            {brands.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <a href="#" className="swiper-slide">
                  <img src={item} alt="" />
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

 