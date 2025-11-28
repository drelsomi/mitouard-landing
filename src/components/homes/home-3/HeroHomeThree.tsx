import Link from "next/link";
import Image from "next/image";

export default function HeroHomeThree() {
  return (
    <section className="hero-section style-three" style={{ backgroundImage: "url(/assets/img/core-img/shade3.png)" }}>
      {/* <!-- Hero Shape --> */}
      <div className="hero-shape cta-circles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* <!-- Hero Shape Two --> */}
      <div className="hero-shape-two fadeInUp" data-delay="0.5">
        <Image data-speed="0.8" src="/assets/img/core-img/shape10.png" alt="" width={1920} height={1080} priority/>
      </div>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* <!-- Hero Content --> */}
          <div className="col-12 col-md-6">
            <div className="hero-content">
              <h2 className="mb-4 heading-line" data-delay="0.5">Revolutionize Your<span
                className="text-primary">{" "} Business</span> Growth.
              </h2>
              <p className="mb-5 heading-line" data-delay="0.6">Provide a brief overview of your SaaS product,
                explaining what it does and how it can benefit the use.</p>
              {/* <!-- Button Group --> */}
              <div className="button-group d-flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-primary fadeInUp" data-delay="0.7">
                  <span>Get Started Now <i className="ti ti-arrow-up-right"></i></span>
                  <span>Get Started Now <i className="ti ti-arrow-up-right"></i></span>
                </Link>
                <Link href="/about-us" className="btn btn-outline-dark fadeInUp" data-delay="0.8">
                  <span>Learn More <i className="ti ti-arrow-up-right"></i></span>
                  <span>Learn More <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Hero Image --> */}
          <div className="col-12 col-md-6">
            <div className="hero-image style-two fadeInUp">
              <Image data-speed="0.85" className="curve-img tilt-image w-auto h-auto" src="/assets/img/bg-img/48.jpg" alt="" width={1920} height={1080} priority/>
              {/* <!-- Floating Image --> */}
              <Image data-speed="0.8" className="floating-img w-auto h-auto" src="/assets/img/bg-img/49.png" alt="" width={1920} height={1080} priority/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
