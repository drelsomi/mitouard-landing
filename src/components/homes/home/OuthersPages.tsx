"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css"; 
import "swiper/css/navigation";

const settings = {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.other-page-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
}

export default function OuthersPages() {
  return (
    <div className="other-pages-wrap">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Inner Pages</span>
              <h2>14 Clean &amp; Modern Pages</h2>
              <p className="mb-0">Carefully designed to generate more leads and conversions with stunning
                14+ premade design website samples.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container-fluid px-4">
        <Swiper
          {...settings}
          modules={[Autoplay, Pagination]}
          className="swiper" id="otherPageSlider">

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/About-Us.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/about-us" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Blog-Details.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/blog-details" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Blog-Grid.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/blog-grid" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Blog-List.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/blog" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Contact-Us.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/contact" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Error.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/404" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Faqs.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/faqs" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Our-Services.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/services" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Our-Team.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/team" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Pricing-Plan.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/pricing" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Project-Details.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/project-details" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Projects.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/projects" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card border-0">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Service-Details.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/service-details" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          {/* <!-- Slide --> */}
          <SwiperSlide className="swiper-slide">
            <div className="homepage-card border-0">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/Team-Details.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Link --> */}
              <Link href="/team-details" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
          </SwiperSlide>

        </Swiper>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        {/* <!-- Other Page Pagination --> */}
        <div className="other-page-pagination"></div>
      </div>

      <div className="divider"></div>
    </div>
  )
}
