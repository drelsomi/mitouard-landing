import Link from "next/link";

export default function AboutHomeTwo() {
  return (
    <section className="about-section style-two bg-white">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6">
            <div className="section-heading">
              <span className="subtitle">About Our App</span>
              <h2 className="mb-4">Effortless Analytics &amp; Reporting</h2>
              <p className="mb-5">Scale your software operations through a custom engineering team. Meet the
                demand of your company's operations with a high-performing nearshore team skilled.</p>
            </div>

            {/* <!-- About List --> */}
            <ul className="about-list mb-5">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                  fill="none">
                  <use href="#checkIcon3" />
                </svg>
                <span>Smart Analytics & Solutions</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                  fill="none">
                  <use href="#checkIcon3" />
                </svg>
                <span>We are trusted all over the world.</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                  fill="none">
                  <use href="#checkIcon3" />
                </svg>
                <span>Start Your 14 Days Free Trials Today!</span>
              </li>
            </ul>

            <Link href="/about-us" className="btn btn-primary">
              <span>More About Us <i className="ti ti-arrow-up-right"></i></span>
              <span>More About Us <i className="ti ti-arrow-up-right"></i></span>
            </Link>
          </div>

          {/* <!-- About Image --> */}
          <div className="col-12 col-md-6">
            <div className="about-two-img translateY10">

              <img className="first-img fadeInUp" data-delay="0.6" src="/assets/img/bg-img/42.png" alt="" />
              <img className="second-img fadeInUp" data-delay="0.7" src="/assets/img/bg-img/43.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
