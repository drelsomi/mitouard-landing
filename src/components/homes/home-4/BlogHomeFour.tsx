import Link from "next/link";

export default function BlogHomeFour() {
  return (
    <section className="blog-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-sm-6">
            <div className="section-heading">
              <span className="subtitle"><span>Blog and Article</span></span>
              <h2 className="mb-0">Recent Blog &amp; Articles About Technology</h2>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="text-sm-end">
              <Link href="/blog-grid" className="btn btn-primary">
                <span>See More Articles <i className="ti ti-arrow-up-right"></i></span>
                <span>See More Articles <i className="ti ti-arrow-up-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-4">
          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-xl-4">
            <div className="blog-card translateY10">
              <div className="blog-img">
                <img src="/assets/img/bg-img/13.jpg" alt="" />
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Knowledge</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">27 May, 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">Unlocking the Power of Data for
                  Business Success.</Link>
                <Link href="/blog-details" className="btn btn-primary">
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-xl-8">
            <div className="d-flex flex-column gap-4">

              {/* <!-- Blog Card --> */}
              <div className="blog-card-two translateY10">
                <div className="blog-img">
                  <img src="/assets/img/bg-img/14.jpg" alt="" />
                </div>
                <div className="blog-body">
                  <div className="blog-meta mb-2">
                    <a href="#" className="post-category">Knowledge</a>
                    <span className="dot"></span>
                    <a className="post-date" href="#">27 May, 2025</a>
                  </div>
                  <Link href="/blog-details" className="post-title d-block h4">The Future of Work: Embracing
                    Digital Transformation.</Link>
                  <Link href="/blog-details" className="btn btn-link">
                    <span>Read more <i className="d-none d-lg-block ti ti-arrow-up-right"></i></span>
                    <span>Read more <i className="d-none d-lg-block ti ti-arrow-up-right"></i></span>
                  </Link>
                </div>
              </div>

              {/* <!-- Blog Card --> */}
              <div className="blog-card-two translateY10">
                <div className="blog-img">
                  <img src="/assets/img/bg-img/15.jpg" alt="" />
                </div>
                <div className="blog-body">
                  <div className="blog-meta mb-2">
                    <a href="#" className="post-category">Knowledge</a>
                    <span className="dot"></span>
                    <a className="post-date" href="#">27 May, 2025</a>
                  </div>
                  <Link href="/blog-details" className="post-title d-block h4">How Al is Revolutionizing
                    Business and Industry Today.</Link>
                  <Link href="/blog-details" className="btn btn-link">
                    <span>Read more <i className="d-none d-lg-block ti ti-arrow-up-right"></i></span>
                    <span>Read more <i className="d-none d-lg-block ti ti-arrow-up-right"></i></span>
                  </Link>
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
