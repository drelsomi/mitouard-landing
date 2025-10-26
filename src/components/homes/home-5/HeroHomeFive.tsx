"use client"; 

import { useJarallax } from "@/hooks/useJarallax";
import 'jarallax/dist/jarallax.css';

export default function HeroHomeFive() {
  const jarallaxRef = useJarallax(0.6);

  return (
    <section className="hero-section bg-dark style-three jarallax" ref={jarallaxRef} 
      style={{ backgroundImage: "url(/assets/img/core-img/shade7.png)" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* <!-- Hero Content --> */}
          <div className="col-12 col-md-6">
            <div className="hero-content pe-xxl-5">
              <h6 className="subtitle fadeInUp" data-delay="0.5">Welcome To Startix</h6>
              <h2 className="mb-4 text-white heading-word" data-delay="0.7">Smart Design for Smarter Software</h2>
              <p className="mb-5 text-white heading-line" data-delay="0.9">Duis aute irure dolor in reprehenderit
                in voluptate officia
                esse
                cillum
                dolore eu fugiat nulla pariatur sint occaecat cupidatat.</p>
              {/* <!-- Button --> */}
              <a href="#" className="btn btn-light fadeInUp" data-delay="1">
                <span>Get Started <i className="ti ti-arrow-up-right"></i></span>
                <span>Get Started <i className="ti ti-arrow-up-right"></i></span>
              </a>
            </div>
          </div>

          {/* <!-- Hero Image --> */}
          <div className="col-12 col-md-6">
            <div className="hero-image fadeInUp" data-delay="1">
              <img src="/assets/img/bg-img/72.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
