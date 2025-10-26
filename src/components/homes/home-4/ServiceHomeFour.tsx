import Link from "next/link";

export default function ServiceHomeFour() {
  return (
    <section className="service-section style-two">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        {/* <!-- Section Heading --> */}
        <div className="section-heading text-center">
          <h3 className="mb-0 heading-chars" data-delay="0.5">Serv<span>ices</span></h3>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        <div className="row g-4">
          {/* <!-- Service Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="service-card-two fadeInUp" data-delay="0.5">
              <div className="shape">
                <img src="/assets/img/core-img/shade5.png" alt="" />
              </div>
              <div className="service-thumb">
                <Link href="/service-details" className="btn">Learn More <i className="ti ti-arrow-right"></i></Link>
                <img src="/assets/img/bg-img/69.png" alt="" />
              </div>
              <div className="service-content">
                <Link href="/service-details">
                  <h4 className="service-title">Robotic Automation</h4>
                </Link>
                <p className="mb-0">Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed.
                </p>
              </div>
              <div className="service-number">01</div>
            </div>
          </div>

          {/* <!-- Service Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="service-card-two fadeInUp" data-delay="0.6">
              <div className="shape">
                <img src="/assets/img/core-img/shade5.png" alt="" />
              </div>
              <div className="service-thumb">
                <Link href="/service-details" className="btn">Learn More <i className="ti ti-arrow-right"></i></Link>
                <img src="/assets/img/bg-img/70.png" alt="" />
              </div>
              <div className="service-content">
                <Link href="/service-details">
                  <h4 className="service-title">Machine learning</h4>
                </Link>
                <p className="mb-0">Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed.
                </p>
              </div>
              <div className="service-number">02</div>
            </div>
          </div>

          {/* <!-- Service Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="service-card-two fadeInUp" data-delay="0.7">
              <div className="shape">
                <img src="/assets/img/core-img/shade5.png" alt="" />
              </div>
              <div className="service-thumb">
                <Link href="/service-details" className="btn">Learn More <i className="ti ti-arrow-right"></i></Link>
                <img src="/assets/img/bg-img/71.png" alt="" />
              </div>
              <div className="service-content">
                <Link href="/service-details">
                  <h4 className="service-title">Education &amp; Science</h4>
                </Link>
                <p className="mb-0">Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed.
                </p>
              </div>
              <div className="service-number">03</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
