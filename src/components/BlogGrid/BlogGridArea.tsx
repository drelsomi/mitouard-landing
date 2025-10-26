import Link from "next/link";

export default function BlogGridArea() {
  return (
    <div className="blog-section bg-white">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-4">
          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.5">
              <div className="blog-img">
                <img src="/assets/img/bg-img/87.jpg" alt="" />
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
                <img src="/assets/img/bg-img/88.jpg" alt="" />
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
                <img src="/assets/img/bg-img/89.jpg" alt="" />
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

          {/* <!-- Blog Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="blog-card fadeInUp" data-delay="0.5">
              <div className="blog-img">
                <img src="/assets/img/bg-img/90.jpg" alt="" />
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Knowledge</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">27 May, 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">Services that printing at you is
                  important</Link>
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
                <img src="/assets/img/bg-img/91.jpg" alt="" />
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Knowledge</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">27 May, 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">A checklist to improve your daily
                  routine</Link>
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
                <img src="/assets/img/bg-img/92.jpg" alt="" />
              </div>
              <div className="blog-body">
                <div className="blog-meta mb-2">
                  <a href="#" className="post-category">Knowledge</a>
                  <span className="dot"></span>
                  <a className="post-date" href="#">27 May, 2025</a>
                </div>
                <Link href="/blog-details" className="post-title h4 mb-4">That will help you get 1% better every
                  day</Link>
                <Link href="/blog-details" className="btn btn-link">
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="divider-sm"></div>

      {/* <!-- Pagination --> */}
      <div className="container">
        <ul className="startix-pagination fadeInUp list-unstyled" data-delay="0.8">
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#"><i className="ti ti-chevron-right"></i></a></li>
        </ul>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
