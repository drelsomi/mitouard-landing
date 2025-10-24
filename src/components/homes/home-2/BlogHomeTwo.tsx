import Link from "next/link";



export default function BlogHomeTwo() {
  return (
    <section className="blog-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Our Blog</span>
              <h2 className="mb-0">Recent Articles and Latest Blog</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.5">
              <div className="blog-img">
                <img src="/assets/img/bg-img/10.jpg" alt="" />
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Knowledge</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">27 May, 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">How to keep up with SAAS trends in
                  2025</Link>
                <Link href="/blog-details" className="btn btn-link">
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.6">
              <div className="blog-img">
                <img src="/assets/img/bg-img/11.jpg" alt="" />
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Knowledge</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">27 May, 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">Miscovery incommo earnestly commanded
                  if.</Link>
                <Link href="/blog-details" className="btn btn-link">
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.7">
              <div className="blog-img">
                <img src="/assets/img/bg-img/12.jpg" alt="" />
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Knowledge</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">27 May, 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">Digital Marketing & Social Media
                  Digest</Link>
                <Link href="/blog-details" className="btn btn-link">
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                </Link>
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
