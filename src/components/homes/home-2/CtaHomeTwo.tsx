

export default function CtaHomeTwo() {
  return (
    <section className="download-section bg-primary">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-md-6">
            <div className="section-heading pe-xxl-5">
              <span className="subtitle text-light fadeInUp" data-delay="0.5">Project Management App</span>
              <h2 className="mb-4 text-white heading-chars" data-delay="0.6">Download Our App to Start Your Free
                Trial Today!</h2>
              <p className="mb-5 text-white heading-line" data-delay="0.7">There are many variations of passages
                of Lorem Ipsum
                available, but the majority have suffered alteration in some form, by injected humour, or
                randomised.</p>
              {/* <!-- Download App Button --> */}
              <div className="d-flex flex-wrap align-items-center gap-4">
                <a href="#" className="btn-download active fadeInUp" data-delay="0.8">
                  <div>
                    <i className="ti ti-brand-apple"></i>
                  </div>
                  <div>
                    <span className="sub-text">Get it on</span>
                    <p className="mb-0">App store</p>
                  </div>
                </a>
                <a href="#" className="btn-download fadeInUp" data-delay="0.9">
                  <div>
                    <i className="ti ti-brand-google-play"></i>
                  </div>
                  <div>
                    <span className="sub-text">Get it on</span>
                    <p className="mb-0">Google play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Download App Image --> */}
          <div className="col-12 col-md-6">
            <div className="download-app-img fadeInUp" data-delay="1">
              <img src="/assets/img/core-img/shape.png" alt="" />
              <img className="download-app-img-two" src="/assets/img/bg-img/9.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
