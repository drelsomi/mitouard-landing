import Link from "next/link";


export default function BlogDetailsArea() {
  return (
    <div className="blog-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-4 g-xxl-5">
          <div className="col-12 col-md-7 col-lg-8">
            <div className="pe-lg-3">
              {/* <!-- Single Blog Content --> */}
              <div className="single-blog-content">
                <img src="/assets/img/bg-img/99.jpg" alt="" />
                <div className="blog-meta flex-wrap d-flex align-items-center gap-3 gap-lg-4">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M4.16927 1.66699H15.8359C16.2962 1.66699 16.6693 2.04009 16.6693 2.50033V18.4531C16.6693 18.6832 16.4827 18.8698 16.2526 18.8698C16.1744 18.8698 16.0976 18.8477 16.0313 18.8061L10.0026 15.0264L3.97393 18.8061C3.77896 18.9283 3.52182 18.8694 3.39958 18.6744C3.358 18.6081 3.33594 18.5314 3.33594 18.4531V2.50033C3.33594 2.04009 3.70904 1.66699 4.16927 1.66699Z"
                        fill="#3147FF" />
                    </svg> Technology
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M1.66406 9.16634H18.3307V16.6663C18.3307 17.1266 17.9576 17.4997 17.4974 17.4997H2.4974C2.03716 17.4997 1.66406 17.1266 1.66406 16.6663V9.16634ZM14.1641 2.49967H17.4974C17.9576 2.49967 18.3307 2.87277 18.3307 3.33301V7.49967H1.66406V3.33301C1.66406 2.87277 2.03716 2.49967 2.4974 2.49967H5.83073V0.833008H7.4974V2.49967H12.4974V0.833008H14.1641V2.49967Z"
                        fill="#3147FF" />
                    </svg> 26 June 2025
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M12.0391 15.8333L9.99739 18.75L7.95573 15.8333H2.4974C2.03716 15.8333 1.66406 15.4602 1.66406 15V3.33333C1.66406 2.8731 2.03716 2.5 2.4974 2.5H17.4974C17.9576 2.5 18.3307 2.8731 18.3307 3.33333V15C18.3307 15.4602 17.9576 15.8333 17.4974 15.8333H12.0391Z"
                        fill="#3147FF" />
                    </svg> 3 Comments
                  </a>
                </div>
                {/* <!-- Post Title --> */}
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of
                  magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in
                  reprehenderit.</p>
                <p>Use both direct conversations and indirect observations to get visibility into employees’
                  challenges and concerns. Use every opportunity to make clear to employees that you support
                  and care them. To facilitate regular conversations between managers and employees,
                  provide.</p>
                <div className="row g-4">
                  <div className="col-12 col-sm-6">
                    <img src="/assets/img/bg-img/100.jpg" alt="" />
                  </div>
                  <div className="col-12 col-sm-6">
                    <img src="/assets/img/bg-img/101.jpg" alt="" />
                  </div>
                </div>
                <p>The third Monday of January is supposed to be the most depressing day of the year. Whether
                  you believe that or not, the long nights, cold weather, and trying to keep to new year
                  resolutions are all probably getting to you a little by now. To make matters worse many
                  will still be recovering from their Christmas spending. So how can you make today</p>
                {/* <!-- Blog Quote --> */}
                <div className="quote-card">
                  <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62"
                    fill="none">
                    <path
                      d="M14.5312 9.41211C6.51702 9.41211 0 15.9309 0 23.9434C0 31.2586 5.43154 37.3287 12.4771 38.3292C11.9131 42.4267 10.3486 46.3256 7.90415 49.7065C7.42874 50.3664 7.44654 51.2604 7.9538 51.8989C8.4515 52.5273 9.31635 52.7655 10.0754 52.4453C21.6088 47.6312 29.0625 36.4418 29.0625 23.9434C29.0625 15.9309 22.5455 9.41211 14.5312 9.41211ZM47.4688 9.41211C39.4545 9.41211 32.9375 15.9309 32.9375 23.9434C32.9375 31.2586 38.369 37.3287 45.4146 38.3292C44.8506 42.4267 43.2861 46.3256 40.8417 49.7065C40.3662 50.3664 40.384 51.2604 40.8913 51.8989C41.389 52.5273 42.2538 52.7655 43.0129 52.4453C54.5463 47.6312 62 36.4418 62 23.9434C62 15.9309 55.483 9.41211 47.4688 9.41211Z"
                      fill="#3147FF" />
                  </svg>
                  <p>We appreciate the consistent high-quality service provided by their team goes above and
                    beyond concerns promptly</p>
                </div>
                <p>Vast numbers of employees now work remotely, and it's too late to develop a set of
                  remote-work policies if you didn't already have one. But there are ways to make the
                  remote-work experience productive and engaging for employees</p>
                <p>Use both direct conversations and indirect observations to get visibility into employees'
                  challenges and concerns. Use every opportunity to make clear to employees that you support
                  and care them. To facilitate regular conversations between managers and employees.</p>
              </div>

              <div className="divider-sm"></div>

              {/* <!-- Tag & Share --> */}
              <div className="tag-share-wrap">
                <ul className="list-unstyled tag-list">
                  <li>Tags:</li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">UI/UX Design</a></li>
                  <li><a href="#">Digital</a></li>
                </ul>

                <ul className="list-unstyled share-list">
                  <li>Share:</li>
                  <li><a href="#"><i className="ti ti-brand-facebook"></i></a></li>
                  <li><a href="#"><i className="ti ti-brand-x"></i></a></li>
                  <li><a href="#"><i className="ti ti-brand-linkedin"></i></a></li>
                  <li><a href="#"><i className="ti ti-brand-youtube"></i></a></li>
                </ul>
              </div>

              <div className="divider-sm"></div>

              {/* <!-- Comments --> */}
              <div className="blog-comments">
                <h2 className="mb-5">2 Comments</h2>

                <ul className="blog-comments-list">
                  <li className="single-comment">
                    <div className="comment-content">
                      <img src="/assets/img/bg-img/102.jpg" alt="" />
                      <div>
                        <p>Neque porro est qui dolorem ipsum quia quaed inventor veritatis
                          et
                          quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros.
                          Lorem
                          Ipsum is simply dummy</p>
                        <h5>Ralph Edwards</h5>
                        <p className="mb-2">Jan 28, 2025</p>
                        <a href="#" className="btn btn-link"><i className="ti ti-message-circle"></i> Reply</a>
                      </div>
                    </div>
                    <ul>
                      <li className="single-comment">
                        <div className="comment-content">
                          <img src="/assets/img/bg-img/103.jpg" alt="" />
                          <div>
                            <p>Neque porro est qui dolorem ipsum quia quaed inventor veritatis
                              et
                              quasi architecto var sed efficitur turpis gilla sed sit amet finibus
                              eros.
                              Lorem
                              Ipsum is simply dummy</p>
                            <h5>Ralph Edwards</h5>
                            <p className="mb-2">Jan 28, 2025</p>
                            <a href="#" className="btn btn-link"><i className="ti ti-message-circle"></i>
                              Reply</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="single-comment">
                    <div className="comment-content">
                      <img src="/assets/img/bg-img/102.jpg" alt="" />
                      <div>
                        <p>Neque porro est qui dolorem ipsum quia quaed inventor veritatis
                          et
                          quasi architecto var sed efficitur turpis gilla sed sit amet finibus eros.
                          Lorem
                          Ipsum is simply dummy</p>
                        <h5>Ralph Edwards</h5>
                        <p className="mb-2">Jan 28, 2025</p>
                        <a href="#" className="btn btn-link"><i className="ti ti-message-circle"></i> Reply</a>
                      </div>
                    </div>
                    <ul>
                      <li className="single-comment">
                        <div className="comment-content">
                          <img src="/assets/img/bg-img/103.jpg" alt="" />
                          <div>
                            <p>Neque porro est qui dolorem ipsum quia quaed inventor veritatis
                              et
                              quasi architecto var sed efficitur turpis gilla sed sit amet finibus
                              eros.
                              Lorem
                              Ipsum is simply dummy</p>
                            <h5>Ralph Edwards</h5>
                            <p className="mb-2">Jan 28, 2025</p>
                            <a href="#" className="btn btn-link"><i className="ti ti-message-circle"></i>
                              Reply</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="divider-sm"></div>

              {/* <!-- Comment Form --> */}
              <div className="comment-form contact-form m-0 p-0">
                <div className="mb-4">
                  <h2 className="mb-3">Leave A Comment</h2>
                  <p className="mb-0">Your email address will not be published. Required fields are marked <span
                    className="text-danger">*</span></p>
                </div>

                {/* <!-- Form --> */}
                <form action="#" method="get">
                  <div className="row g-4">
                    <div className="col-12 col-lg-6">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="col-12 col-lg-6">
                      <input type="email" className="form-control" placeholder="Email Address" />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="Select Subject" />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows={20} cols={30}
                        placeholder="Type your message"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        <span>Post Comment <i className="ti ti-arrow-up-right"></i></span>
                        <span>Post Comment <i className="ti ti-arrow-up-right"></i></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
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
                    <a href="blog-grid.html">
                      Technology
                      <span>(03)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid.html">
                      Apps Development
                      <span>(01)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid.html">
                      Business
                      <span>(05)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid.html">
                      Social Marketing
                      <span>(02)</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-grid.html">
                      Business Intelligencece
                      <span>(04)</span>
                    </a>
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
                      <Link href="/blog-details" className="post-title mb-2">How to keep with SAAS trends
                        in
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
                      <Link href="/blog-details" className="post-title mb-2">Keep Your Business Safe
                        Ensure
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
                      <Link href="/blog-details" className="post-title mb-2">Tackling the Changes of
                        Retell
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
