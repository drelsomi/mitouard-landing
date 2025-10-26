import Link from "next/link";

export default function BlogArea() {
  return (
    <div className="blog-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 g-md-4 g-xl-5">
          <div className="col-12 col-md-7 col-lg-8">
            {/* <!-- Blog Standard --> */}
            <div className="d-flex flex-column gap-4 pe-lg-3">

              {/* <!-- Blog Card --> */}
              <div className="blog-card style-two fadeInUp" data-delay="0.5">
                <div className="blog-img">
                  <img src="/assets/img/bg-img/96.jpg" alt="" />
                </div>
                <div className="blog-body">
                  <div className="blog-meta mb-2">
                    <a href="#" className="post-category">Knowledge</a>
                    <span className="dot"></span>
                    <a className="post-date" href="#">27 May, 2025</a>
                  </div>
                  <Link href="/blog-details" className="post-title h4 mb-4">That will help you get 1% better
                    every day</Link>
                  <p className="mb-4">Each demo built with Teba will look different. You can customize almost
                    anything in appearance of your website with only a few clicks.</p>
                  <Link href="/blog-details" className="btn btn-link">
                    <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                    <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  </Link>
                </div>
              </div>

              {/* <!-- Blog Card --> */}
              <div className="blog-card style-two fadeInUp" data-delay="0.6">
                <div className="blog-img">
                  <img src="/assets/img/bg-img/97.jpg" alt="" />
                </div>
                <div className="blog-body">
                  <div className="blog-meta mb-2">
                    <a href="#" className="post-category">Knowledge</a>
                    <span className="dot"></span>
                    <a className="post-date" href="#">27 May, 2025</a>
                  </div>
                  <Link href="/blog-details" className="post-title h4 mb-4">Keep Your Business Ensure High Safe
                    Availability</Link>
                  <p className="mb-4">Each demo built with Teba will look different. You can customize almost
                    anything in appearance of your website with only a few clicks.</p>
                  <Link href="/blog-details" className="btn btn-link">
                    <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                    <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  </Link>
                </div>
              </div>

              {/* <!-- Blog Card --> */}
              <div className="blog-card style-two fadeInUp" data-delay="0.7">
                <div className="blog-img">
                  <img src="/assets/img/bg-img/98.jpg" alt="" />
                </div>
                <div className="blog-body">
                  <div className="blog-meta mb-2">
                    <a href="#" className="post-category">Knowledge</a>
                    <span className="dot"></span>
                    <a className="post-date" href="#">27 May, 2025</a>
                  </div>
                  <Link href="/blog-details" className="post-title h4 mb-4">Tackling the Changes of Retell
                    Industry</Link>
                  <p className="mb-4">Each demo built with Teba will look different. You can customize almost
                    anything in appearance of your website with only a few clicks.</p>
                  <Link href="/blog-details" className="btn btn-link">
                    <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                    <span>Read more <i className="ti ti-arrow-up-right"></i></span>
                  </Link>
                </div>
              </div>

              {/* <!-- Divider --> */}
              <div className="divider-sm"></div>

              {/* <!-- Pagination --> */}
              <ul className="startix-pagination list-unstyled">
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="ti ti-chevron-right"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-5 col-lg-4">
            <div className="d-flex flex-column gap-5">
              {/* <!-- Widget --> */}
              <div className="widget-card">
                <h4 className="h4 widget-title">Search Here</h4>

                {/* <!-- Form --> */}
                <form action="#" method="get">
                  <input type="search" placeholder="Search..." className="form-control" />
                  <button type="submit">
                    <i className="ti ti-search"></i>
                  </button>
                </form>
              </div>

              {/* <!-- Widget --> */}
              <div className="widget-card">
                <h4 className="h4 widget-title">Categories</h4>

                <ul className="blog-list style-two">
                  <li>
                    <Link href="/blog-grid">
                      Technology
                      <span>(03)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">
                      Apps Development
                      <span>(01)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">
                      Business
                      <span>(05)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">
                      Social Marketing
                      <span>(02)</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">
                      Business Intelligencece
                      <span>(04)</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Widget --> */}
              <div className="widget-card">
                <h4 className="h4 widget-title">Recent Posts</h4>

                <div className="d-flex flex-column gap-4">
                  {/* <!-- Widget Post --> */}
                  <div className="widget-blog">
                    <div className="blog-thumbnail">
                      <img src="/assets/img/bg-img/93.jpg" alt="" />
                    </div>
                    <div className="blog-content">
                      <Link href="/blog-details" className="post-title mb-2">How to keep with SAAS trends in
                        2025</Link>
                      <a href="#" className="post-date">26 June 2025</a>
                    </div>
                  </div>

                  {/* <!-- Widget Post --> */}
                  <div className="widget-blog">
                    <div className="blog-thumbnail">
                      <img src="/assets/img/bg-img/94.jpg" alt="" />
                    </div>
                    <div className="blog-content">
                      <Link href="/blog-details" className="post-title mb-2">Keep Your Business Safe Ensure
                        High Availability</Link>
                      <a href="#" className="post-date">26 June 2025</a>
                    </div>
                  </div>

                  {/* <!-- Widget Post --> */}
                  <div className="widget-blog">
                    <div className="blog-thumbnail">
                      <img src="/assets/img/bg-img/95.jpg" alt="" />
                    </div>
                    <div className="blog-content">
                      <Link href="/blog-details" className="post-title mb-2">Tackling the Changes of Retell
                        Industry</Link>
                      <a href="#" className="post-date">26 June 2025</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Widget --> */}
              <div className="widget-card">
                <h4 className="h4 widget-title">Tags</h4>

                {/* <!-- Tag List --> */}
                <ul className="tag-list list-unstyled">
                  <li><a href="#">Brand</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Development</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">SaaS</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Startup</a></li>
                  <li><a href="#">Services</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
