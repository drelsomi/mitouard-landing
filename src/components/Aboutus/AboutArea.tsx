import Link from "next/link";

export default function AboutArea() {
  return (
    <section className="about-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-12 col-md-6">
            <div className="about-img pe-xxl-5 translateY10">
              <img className="tilt-image" src="/assets/img/bg-img/28.jpg" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="section-heading">
              <span className="subtitle">About Us</span>
              <h2 className="mb-4 color-change">Robust, Easy-to-Use SaaS for Builders</h2>
              <p className="mb-4">Scale your software operations through a custom engineering team. Meet the
                demand of your company's operations with a high-performing nearshore team skilled.</p>

              {/* <!-- About List --> */}
              <ul className="list-unstyled about-list mb-5">
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon"></use>
                  </svg>
                  Integrate a diverse range of ideas
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon"></use>
                  </svg>
                  Deliver the highest quality outcomes
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon"></use>
                  </svg>
                  Believe in powerof implication
                </li>
              </ul>

              {/* <!-- Button --> */}
              <Link href="/about-us" className="btn btn-primary">
                <span>More About Us <i className="ti ti-arrow-up-right"></i></span>
                <span>More About Us <i className="ti ti-arrow-up-right"></i></span>
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