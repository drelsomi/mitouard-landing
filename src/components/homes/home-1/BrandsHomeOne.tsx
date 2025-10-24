"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
 
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

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


 

export default function BrandsHomeOne() {
  return (
    <div className="partner-section py-5 bg-secondary">
      <div className="container">
        {/* <!-- Partner Content --> */}
        <div className="partner-content">
          <Swiper
            loop={true}
            spaceBetween={24}
            slidesPerView={5}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
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
            className="swiper partner-swiper" id="partnerSwiperTwo">
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
    </div>
  )
}
