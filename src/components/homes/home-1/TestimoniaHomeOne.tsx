"use client";
import testimonial_data from "@/data/testimonial-data";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
 
import "swiper/css/navigation";


const s = {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 2,
  navigation: {
    nextEl: '.testimonial-four-button-next',
    prevEl: '.testimonial-four-button-prev',
  },
  pagination: {
    el: '.testimonial-pagination-four',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
}


export default function TestimoniaHomeOne() {
  return (
    <section className="testimonial-section">
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-sm-7">
            <div className="section-heading">
              <span className="subtitle">Our Client Review</span>
              <h2 className="mb-0">See What Our Customers Have to Say!</h2>
            </div>
          </div>

          {/* <!-- Testimonial Navigation --> */}
          <div className="col-12 col-sm-5">
            <div className="d-flex align-items-center justify-content-sm-end gap-4">
              <div className="testimonial-four-button-prev">
                <i className="ti ti-chevron-left"></i>
              </div>
              <div className="testimonial-four-button-next">
                <i className="ti ti-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        {/* <!-- Testimonial Slider --> */}
        <div className="testimonial-slide">
          <Swiper
            loop={true}
            spaceBetween={30}
            slidesPerView={2}
            navigation={{
              nextEl: '.testimonial-four-button-next',
              prevEl: '.testimonial-four-button-prev',
            }}
            pagination={{
              el: '.testimonial-pagination-four',
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 2,
              },
            }}
            className="swiper testimonial-swiper-four" id="testimonialSwiperFour">
            {testimonial_data.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="testimonial-card-four">
                  <div className="quote-icon">
                    <svg width="64" height="64">
                      <use href="#quoteIcon"></use>
                    </svg>
                  </div>
                  <div className="testimonial-info">
                    <p className="testimonial-text mb-4">{item.text}</p>
                    <div className="rating mb-2">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <i key={i} className="ti ti-star-filled"></i>
                      ))}
                    </div>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-0">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        {/* <!-- Testimonial Pagination --> */}
        <div className="testimonial-pagination-four"></div>
      </div>

      <div className="divider"></div>
    </section>
  )
}
