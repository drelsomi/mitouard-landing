import Link from "next/link";

export default function FeaturesHomeOne() {
  return (
    <section className="features-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Featured Works</span>
              <h2 className="mb-4">Master Your Project Success</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* <!-- Featured Image --> */}
          <div className="col-12 col-md-6">
            <div className="featured-img translateY10 me-xl-4">
              <img className="tilt-image img-anim-left" src="/assets/img/bg-img/32.png" alt="" />
            </div>
          </div>
          {/* <!-- Featured Content --> */}
          <div className="col-12 col-md-6">
            <div className="featured-content">
              <h2 className="mb-3">Marketing Teams</h2>
              <p className="mb-4">Saas products are accessible via web browsers, eliminating the need for users to
                install or maintain software locally. This model provides business with This model provides
                business withflexibility.</p>

              {/* <!-- List --> */}
              <ul className="list-unstyled mb-5 featured-list">
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Social Media Design
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Social Media Management
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Custom ad strategy
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Unique ads campaigns
                </li>
              </ul>
              {/* <!-- Button --> */}
              <Link href="/services" className="btn btn-primary">
                <span>Read More <i className="ti ti-arrow-up-right"></i></span>
                <span>Read More <i className="ti ti-arrow-up-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          {/* <!-- Featured Content --> */}
          <div className="col-12 col-md-6">
            <div className="featured-content">
              <h2 className="mb-3">Project Management</h2>
              <p className="mb-4">Saas products are accessible via web browsers, eliminating the need for users to
                install or maintain software locally. This model provides business with This model provides
                business withflexibility.</p>
              {/* <!-- List --> */}
              <ul className="list-unstyled mb-5 featured-list">
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Social Media Design
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Social Media Management
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Custom ad strategy
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Unique ads campaigns
                </li>
              </ul>
              {/* <!-- Button --> */}
              <Link href="/services" className="btn btn-primary">
                <span>Read More <i className="ti ti-arrow-up-right"></i></span>
                <span>Read More <i className="ti ti-arrow-up-right"></i></span>
              </Link>
            </div>
          </div>

          {/* <!-- Featured Image --> */}
          <div className="col-12 col-md-6">
            <div className="featured-img translateY10 me-xl-4">
              <img className="tilt-image img-anim-right" src="/assets/img/bg-img/33.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          {/* <!-- Featured Image --> */}
          <div className="col-12 col-md-6">
            <div className="featured-img translateY10 me-xl-4">
              <img className="tilt-image img-anim-left" src="/assets/img/bg-img/34.png" alt="" />
            </div>
          </div>

          {/* <!-- Featured Content --> */}
          <div className="col-12 col-md-6">
            <div className="featured-content">
              <h2 className="mb-3">Strategic Planning</h2>
              <p className="mb-4">Saas products are accessible via web browsers, eliminating the need for users to
                install or maintain software locally. This model provides business with This model provides
                business withflexibility.</p>
              {/* <!-- List --> */}
              <ul className="list-unstyled mb-5 featured-list">
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Social Media Design
                </li>

                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Social Media Management
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Custom ad strategy
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg> Unique ads campaigns
                </li>
              </ul>
              {/* <!-- Button --> */}
              <Link href="/services" className="btn btn-primary">
                <span>Read More <i className="ti ti-arrow-up-right"></i></span>
                <span>Read More <i className="ti ti-arrow-up-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
