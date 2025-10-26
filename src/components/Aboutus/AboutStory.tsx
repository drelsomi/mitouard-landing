import Count from "@/common/count";
import Link from "next/link";

export default function AboutStory() {
  return (
    <section className="story-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="story-content">
          <div className="row g-4 align-items-end">
            <div className="col-12 col-lg-8 col-xxl-9">
              <div className="section-heading">
                <h2 className="mb-3">Our Story</h2>
                <p className="mb-5">Our mission is simple yet profound: to empower businesses with cutting-edge
                  CRM solutions
                  that drive growth and enhance customer satisfaction. We operate on core values of
                  innovation, integrity, and customer-centricity, ensuring that every solution we provide
                  aligns with these principles.</p>
              </div>

              <div className="row g-4 align-items-end">
                <div className="col-12 col-md-6">
                  {/* <!-- About List --> */}
                  <ul className="about-list list-unstyled">
                    <li>
                      <svg width="20" height="20">
                        <use href="#checkIcon3"></use>
                      </svg>
                      Expertise and Innovation
                    </li>
                    <li>
                      <svg width="20" height="20">
                        <use href="#checkIcon3"></use>
                      </svg>
                      Straightforward Process
                    </li>
                    <li>
                      <svg width="20" height="20">
                        <use href="#checkIcon3"></use>
                      </svg>
                      Client-Centric Approach
                    </li>
                    <li>
                      <svg width="20" height="20">
                        <use href="#checkIcon3"></use>
                      </svg>
                      Affordable Solutions
                    </li>
                  </ul>
                  <div className="divider-sm"></div>
                  {/* <!-- Button --> */}
                  <Link href="/contact" className="btn btn-dark">
                    <span>About More <i className="ti ti-arrow-up-right"></i></span>
                    <span>About More <i className="ti ti-arrow-up-right"></i></span>
                  </Link>
                </div>
                <div className="col-12 col-md-6">
                  <img src="/assets/img/bg-img/121.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4 col-xxl-3">
              <div className="d-flex flex-column gap-4">
                <img src="/assets/img/bg-img/122.jpg" alt="" />
                <img src="/assets/img/bg-img/123.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="divider"></div>

          {/* <!-- Cool Facts Wrap --> */}
          <div className="cool-facts-wrap">
            <div className="row g-0">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="cool-facts">
                  <h2><span className="counter"> <Count number={5} text="+" add_style={true} /> </span></h2>
                  <p className="mb-0">Years of Experience</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="cool-facts">
                  <h2><span className="counter"> <Count number={430} text="+" add_style={true} /> </span></h2>
                  <p className="mb-0">Project Completed</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="cool-facts">
                  <h2><span className="counter"> <Count number={2} text="+" add_style={true} /> </span></h2>
                  <p className="mb-0">Employees</p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="cool-facts">
                  <h2><span className="counter"> <Count number={10} text="+" add_style={true} /> </span></h2>
                  <p className="mb-0">Worldwide Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}