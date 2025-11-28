"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Swiper styles
import "swiper/css";

import HappyClientsIcon from "@/svg/HappyClientsIcon";
import FinishedProjectsIcon from "@/svg/FinishedProjectsIcon";
import AwardsIcon from "@/svg/AwardsIcon";
import GlobalOfficesIcon from "@/svg/GlobalOfficesIcon";
import Count from "@/common/count";

const counter_data = [
  { count: 1800, label: 'Happy Clients', icon: <HappyClientsIcon />, delay: 0.5 },
  { count: 620, label: 'Finished Projects', icon: <FinishedProjectsIcon />, delay: 0.7 },
  { count: 350, label: 'Awards Won', icon: <AwardsIcon />, delay: 0.9 },
  { count: 24, label: 'Global Offices', icon: <GlobalOfficesIcon />, delay: 1.1 },
];

export default function TestimonialHomeThree() {
  return (
    <section className="testimonial-section style-three"
      style={{ backgroundImage: "url(/assets/img/core-img/shape4.png)" }}>
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6">
            <div className="section-heading">
              <span className="subtitle">Testimonials</span>
              <h2 className="mb-0 text-white">Our Clients Awesome Testimonials</h2>
            </div>
            {/* <!-- Rating Card --> */}
            <div className="rating-card">
              <h2 className="mb-0">4.9</h2>
              <div>
                <div className="rating">
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                  <i className="ti ti-star-filled"></i>
                </div>
                
                <div className="counter-text" style={{ color: "#fff" }}>
                  <Count number={1600} text="+ Clients Rating." />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Testimonial Slider --> */}
          <div className="col-12 col-md-6">
            <Swiper
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="swiper testimonial-swiper" id="testimonialSwiperThree">


              {/* <!-- Testimonial Slide --> */}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card-three">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/19.jpg" alt="" width={1000} height={1000} priority />
                    </div>
                    <div>
                      <h5>Alexander Cameron</h5>
                      <p className="mb-0">Lead Developer</p>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <div className="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                        viewBox="0 0 36 36" fill="none">
                        <path
                          d="M8.4375 5.46484C3.78408 5.46484 0 9.24998 0 13.9023C0 18.1499 3.1538 21.6745 7.24479 22.2554C6.91727 24.6346 6.00884 26.8985 4.58951 28.8616C4.31346 29.2447 4.3238 29.7639 4.61834 30.1346C4.90732 30.4995 5.40949 30.6378 5.85021 30.4519C12.5471 27.6566 16.875 21.1595 16.875 13.9023C16.875 9.24998 13.0909 5.46484 8.4375 5.46484ZM27.5625 5.46484C22.9091 5.46484 19.125 9.24998 19.125 13.9023C19.125 18.1499 22.2788 21.6745 26.3698 22.2554C26.0423 24.6346 25.1338 26.8985 23.7145 28.8616C23.4385 29.2447 23.4488 29.7639 23.7433 30.1346C24.0323 30.4995 24.5345 30.6378 24.9752 30.4519C31.6721 27.6566 36 21.1595 36 13.9023C36 9.24998 32.2159 5.46484 27.5625 5.46484Z"
                          fill="#FA3E5F" />
                      </svg>
                    </div>
                    <p className="testimonial-text">“Working with several word press themes a
                      templates
                      the last years, I only can say this is best in every level. I use it
                      for my
                      company and the reviews a have already are all excellent. Not only
                      the design
                      but the Not only the design code quality.”</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* <!-- Testimonial Slide --> */}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card-three">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/19.jpg" alt="" width={1000} height={1000} priority />
                    </div>
                    <div>
                      <h5>Alexander Cameron</h5>
                      <p className="mb-0">Lead Developer</p>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <div className="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                        viewBox="0 0 36 36" fill="none">
                        <path
                          d="M8.4375 5.46484C3.78408 5.46484 0 9.24998 0 13.9023C0 18.1499 3.1538 21.6745 7.24479 22.2554C6.91727 24.6346 6.00884 26.8985 4.58951 28.8616C4.31346 29.2447 4.3238 29.7639 4.61834 30.1346C4.90732 30.4995 5.40949 30.6378 5.85021 30.4519C12.5471 27.6566 16.875 21.1595 16.875 13.9023C16.875 9.24998 13.0909 5.46484 8.4375 5.46484ZM27.5625 5.46484C22.9091 5.46484 19.125 9.24998 19.125 13.9023C19.125 18.1499 22.2788 21.6745 26.3698 22.2554C26.0423 24.6346 25.1338 26.8985 23.7145 28.8616C23.4385 29.2447 23.4488 29.7639 23.7433 30.1346C24.0323 30.4995 24.5345 30.6378 24.9752 30.4519C31.6721 27.6566 36 21.1595 36 13.9023C36 9.24998 32.2159 5.46484 27.5625 5.46484Z"
                          fill="#FA3E5F" />
                      </svg>
                    </div>
                    <p className="testimonial-text">“Working with several word press themes a
                      templates
                      the last years, I only can say this is best in every level. I use it
                      for my
                      company and the reviews a have already are all excellent. Not only
                      the design
                      but the Not only the design code quality.”</p>
                  </div>
                </div>
              </SwiperSlide>

              {/* <!-- Testimonial Slide --> */}
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card-three">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/19.jpg" alt="" width={1000} height={1000} priority />
                    </div>
                    <div>
                      <h5>Alexander Cameron</h5>
                      <p className="mb-0">Lead Developer</p>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <div className="quote-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                        viewBox="0 0 36 36" fill="none">
                        <path
                          d="M8.4375 5.46484C3.78408 5.46484 0 9.24998 0 13.9023C0 18.1499 3.1538 21.6745 7.24479 22.2554C6.91727 24.6346 6.00884 26.8985 4.58951 28.8616C4.31346 29.2447 4.3238 29.7639 4.61834 30.1346C4.90732 30.4995 5.40949 30.6378 5.85021 30.4519C12.5471 27.6566 16.875 21.1595 16.875 13.9023C16.875 9.24998 13.0909 5.46484 8.4375 5.46484ZM27.5625 5.46484C22.9091 5.46484 19.125 9.24998 19.125 13.9023C19.125 18.1499 22.2788 21.6745 26.3698 22.2554C26.0423 24.6346 25.1338 26.8985 23.7145 28.8616C23.4385 29.2447 23.4488 29.7639 23.7433 30.1346C24.0323 30.4995 24.5345 30.6378 24.9752 30.4519C31.6721 27.6566 36 21.1595 36 13.9023C36 9.24998 32.2159 5.46484 27.5625 5.46484Z"
                          fill="#FA3E5F" />
                      </svg>
                    </div>
                    <p className="testimonial-text">“Working with several word press themes a
                      templates
                      the last years, I only can say this is best in every level. I use it
                      for my
                      company and the reviews a have already are all excellent. Not only
                      the design
                      but the Not only the design code quality.”</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- CTA Content --> */}
      <div className="cta-content">
        <div className="container">
          <div className="row align-items-center g-4">
            {counter_data.map((item, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 translateY10">
                <div className="cool-fact-card fadeInUp" data-delay={item.delay}>
                  <div className="cta-icon">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="mb-2"><span className="counter"> <Count number={item.count} text="+" /> </span></h2>
                    <p className="mb-0">{item.label}</p>
                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>

        <div className="container">
          <hr />
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
