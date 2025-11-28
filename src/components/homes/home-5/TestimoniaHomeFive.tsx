"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Swiper styles
import "swiper/css";
 
export default function TestimoniaHomeFive() {
  return (
    <section className="testimonial-section bg-secondary">
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Testimonials</span>
              <h2 className="mb-0">What Our Clients Say?</h2>
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        {/* <!-- Testimonial Slider --> */}
        <div className="container">
          <div className="row align-items-center g-5 justify-content-center">
            {/* <!-- Testimonial Side Images --> */}
            <div className="col-12 col-sm d-none d-lg-block">
              <div className="testimonial-side-imgs">
                <Image src="/assets/img/bg-img/20.jpg" alt="" width={60} height={60} priority/>
                <Image src="/assets/img/bg-img/21.jpg" alt="" width={60} height={60} priority/>
                <Image src="/assets/img/bg-img/22.jpg" alt="" width={60} height={60} priority/>
                <Image src="/assets/img/bg-img/23.jpg" alt="" width={60} height={60} priority/>
              </div>
            </div>

            {/* <!-- Testimonial Slider --> */}
            <div className="col-12 col-sm-10 col-lg-7">
              <Swiper
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false
                }}
                pagination={{
                  el: '.testimonial-pagination',
                  clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className="swiper testimonial-swiper" id="testimonialSwiper">


                {/* <!-- Testimonial Slide --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/19.jpg" alt="" width={100} height={100} priority/>
                    </div>
                    <div className="testimonial-info">
                      <p className="testimonial-text">“Working with several word press themes a
                        templates
                        the last years, I only can say this is best in every level. I use it
                        for my
                        company and the reviews a have already are all excellent. Not only
                        the design
                        but the Not only the design code quality.”</p>
                      <h5 className="mb-2">Alexander Cameron</h5>
                      <p className="mb-0">Lead Developer</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <!-- Testimonial Slide --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/20.jpg" alt="" width={1920} height={1080} priority/>
                    </div>
                    <div className="testimonial-info">
                      <p className="testimonial-text">“I only can say this is best in every level. Working with several word press themes a
                        templates
                        the last years,  I use it
                        for my
                        company and the reviews a have already are all excellent. Not only
                        the design
                        but the Not only the design code quality.”</p>
                      <h5 className="mb-2">Alexander Cameron</h5>
                      <p className="mb-0">Lead Developer</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <!-- Testimonial Slide --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/21.jpg" alt="" width={1920} height={1080} priority/>
                    </div>
                    <div className="testimonial-info">
                      <p className="testimonial-text">“Not only the design Working with several word press themes a
                        templates
                        the last years, I only can say this is best in every level. I use it
                        for my
                        company and the reviews a have already are all excellent.
                        but the Not only the design code quality.”</p>
                      <h5 className="mb-2">Alexander Cameron</h5>
                      <p className="mb-0">Lead Developer</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            {/* <!-- Testimonial Side Images --> */}
            <div className="col-12 col-sm d-none d-lg-block">
              <div className="testimonial-side-imgs">
                <Image src="/assets/img/bg-img/24.jpg" alt="" width={60} height={60} priority/>
                <Image src="/assets/img/bg-img/25.jpg" alt="" width={60} height={60} priority/>
                <Image src="/assets/img/bg-img/26.jpg" alt="" width={60} height={60} priority/>
                <Image src="/assets/img/bg-img/27.jpg" alt="" width={60} height={60} priority/>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        {/* <!-- Testimonial Pagination --> */}
        <div className="testimonial-pagination"></div>
      </div>

      <div className="divider"></div>
    </section>
  )
}
