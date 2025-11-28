"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Swiper styles
import "swiper/css";

export default function TestimonialHomeTwo() {
  return (
    <section className="testimonial-section bg-secondary"
      style={{ backgroundImage: 'url(/assets/img/core-img/shape3.png)' }}>
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Témoignages</span>
              <h2 className="mb-0">Ils utilisent Le Mitouard App</h2>
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
                <Image src="/assets/img/bg-img/20.jpg" alt="" width={1000} height={1000} priority />
                <Image src="/assets/img/bg-img/21.jpg" alt="" width={1000} height={1000} priority />
                <Image src="/assets/img/bg-img/22.jpg" alt="" width={1000} height={1000} priority />
                <Image src="/assets/img/bg-img/23.jpg" alt="" width={1000} height={1000} priority />
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
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: '.testimonial-pagination',
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}

                className="swiper testimonial-swiper" id="testimonialSwiper">

                {/* <!-- Testimonial Slide --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/19.jpg" alt="" width={1000} height={1000} priority />
                    </div>
                    <div className="testimonial-info">
                      <p className="testimonial-text">“Nos pièces fiscales et sociales sont accessibles en déplacement, même sans réseau. La recherche IA évite de fouiller nos archives, on gagne un temps précieux.”</p>
                      <h5 className="mb-2">Claire Martin</h5>
                      <p className="mb-0">Directrice financière</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <!-- Testimonial Slide --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/20.jpg" alt="" width={1000} height={1000} priority />
                    </div>
                    <div className="testimonial-info">
                      <p className="testimonial-text">“Le Mitouard App structure nos dossiers par catégorie. Même nos équipes terrain retrouvent les contrats et PV en 2 clics.”</p>
                      <h5 className="mb-2">Amadou Diallo</h5>
                      <p className="mb-0">Responsable juridique</p>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <!-- Testimonial Slide --> */}
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-image">
                      <Image src="/assets/img/bg-img/21.jpg" alt="" width={1000} height={1000} priority />
                    </div>
                    <div className="testimonial-info">
                      <p className="testimonial-text">“La première année offerte a fluidifié l’onboarding de nos clients. Le renouvellement annuel se fait sans friction et le support du cabinet est réactif.”</p>
                      <h5 className="mb-2">Sophie Bernard</h5>
                      <p className="mb-0">Cabinet d’expertise comptable partenaire</p>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>

            {/* <!-- Testimonial Side Images --> */}
            <div className="col-12 col-sm d-none d-lg-block">
              <div className="testimonial-side-imgs">
                <Image src="/assets/img/bg-img/24.jpg" alt="" width={1000} height={1000} priority />
                <Image src="/assets/img/bg-img/25.jpg" alt="" width={1000} height={1000} priority />
                <Image src="/assets/img/bg-img/26.jpg" alt="" width={1000} height={1000} priority />
                <Image src="/assets/img/bg-img/27.jpg" alt="" width={1000} height={1000} priority />
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
