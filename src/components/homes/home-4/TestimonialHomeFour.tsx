"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useRef, useEffect, useState } from "react";

import "swiper/css"; 
import "swiper/css/navigation";

export default function TestimonialHomeFour() {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const blogSlides = [
    {
      text: "“Versatile consulting caters to a spectrum Comprehensive strategies, the realm of consulting caters to a spectrum of needs with its array of  offerings. Comprehensive strategies, the realm of  of needs with its of versatile offerings”",
      name: "Brooklyn Simmons",
      role: "Lead Developer",
    },
    {
      text: "“Comprehensive strategies Versatile consulting caters to a spectrum Comprehensive strategies, the realm of consulting caters to a spectrum of needs with its array of  offerings. , the realm of  of needs with its of versatile offerings”",
      name: "Brooklyn Simmons",
      role: "Lead Developer",
    },
  ];

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // remove old navigation
      swiperInstance.navigation.init(); // initialize new navigation
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="testimonial-section bg-secondary style-two mx-md-3 mx-xl-4 rounded-4"
      style={{ backgroundImage: "url(/assets/img/core-img/shape5.png)" }}>
      <div className="divider"></div>

      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-6 col-sm">
            {/* Prev Button */}
            <div ref={prevRef} className="testimonial-two-button-prev">
              <i className="ti ti-chevron-left"></i>
            </div>
          </div>

          <div className="col-12 col-sm-8 col-lg-9 col-testimonial">
            <Swiper
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              modules={[Autoplay, Navigation, Pagination]}
              onSwiper={setSwiperInstance} // get swiper instance after init
              className="swiper testimonial-swiper"
            >
              {blogSlides.map((slide, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <div className="testimonial-card-two">
                      <div className="quote-icon mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"
                      fill="none">
                      <path
                        d="M49 54.2852C57.2727 54.2852 64 47.556 64 39.2852C64 31.7339 58.3933 25.468 51.1204 24.4353C51.7026 20.2055 53.3176 16.1809 55.8409 12.6909C56.3316 12.0098 56.3133 11.0869 55.7896 10.4278C55.2759 9.77916 54.3831 9.53328 53.5996 9.86378C41.6941 14.8332 34 26.3835 34 39.2852C34 47.556 40.7272 54.2852 49 54.2852ZM15 54.2852C23.2728 54.2852 30 47.556 30 39.2852C30 31.7339 24.3933 25.468 17.1204 24.4353C17.7026 20.2055 19.3176 16.1809 21.8409 12.6909C22.3316 12.0098 22.3133 11.0869 21.7896 10.4278C21.2759 9.77916 20.3831 9.53328 19.5996 9.86378C7.69413 14.8332 2.43924e-06 26.3835 1.31134e-06 39.2852C5.88279e-07 47.556 6.72725 54.2852 15 54.2852Z"
                        fill="url(#paint0_linear_1_299511)" />
                      <defs>
                        <linearGradient id="paint0_linear_1_299511" x1="32" y1="54.2852" x2="32"
                          y2="9.71726" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#601FEB" />
                          <stop offset="1" stopColor="#9E02C0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                    <p className="testimonial-text">{slide.text}</p>
                    <div className="testimonial-info">
                      <div className="rating">
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                        <i className="ti ti-star-filled"></i>
                      </div>
                      <h4 className="mb-1">{slide.name}</h4>
                      <p className="mb-0">{slide.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-6 col-sm text-end">
            {/* Next Button */}
            <div ref={nextRef} className="testimonial-two-button-next ms-auto">
              <i className="ti ti-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}
