export default function ContactArea() {
  return (
    <>
      <section className="contact-info-section">
        {/* <!-- Divider --> */}
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            {/* <!-- Contact Info Card --> */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="contact-info-card me-xxl-5">
                <h2 className="mb-5">+1 (543) 432-3532</h2>

                <div className="contact-sm-card">
                  <h4 className="mb-3">Address</h4>
                  <p>6801 Hollywood Blvd, Los Angeles, CA 90028</p>
                  <p>6801 Hollywood Blvd, Los Angeles, CA 90028</p>
                </div>

                <hr />

                <div className="contact-sm-card">
                  <h4 className="mb-3">Email</h4>
                  <p>info@startix.com</p>
                  <p>info@startix.com</p>
                </div>

                <hr />

                <div className="contact-sm-card">
                  <h4 className="mb-3">Follow</h4>
                  {/* <!-- Social Navigation --> */}
                  <div className="social-nav">
                    <a href="#"><i className="ti ti-brand-facebook"></i></a>
                    <a href="#"><i className="ti ti-brand-twitter"></i></a>
                    <a href="#"><i className="ti ti-brand-instagram"></i></a>
                    <a href="#"><i className="ti ti-brand-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Contact Info Card --> */}
            <div className="col-12 col-md-6 col-lg-7">
              <div className="section-heading">
                <span className="subtitle">Contact Us</span>
                <h2 className="mb-5">Get started and grow your business now.</h2>
              </div>

              <form action="#">
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input type="text" className="form-control bg-secondary" placeholder="Your name" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input type="email" className="form-control bg-secondary" placeholder="Email address" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input type="text" className="form-control bg-secondary" placeholder="Subject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea className="form-control bg-secondary" placeholder="Type your message"></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100 rounded-3">
                      <span>Send Message <i className="ti ti-arrow-up-right"></i></span>
                      <span>Send Message <i className="ti ti-arrow-up-right"></i></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider"></div>
      </section>

      {/* <!-- Maps Section --> */}
      <div className="maps-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28244.1302134898!2d-74.1755892587003!3d40.01311247715887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c10878047171d5%3A0x583d9327f3de1501!2sOcean%20County%20College!5e0!3m2!1sen!2sbd!4v1754374104321!5m2!1sen!2sbd"
          loading="lazy"></iframe>
      </div>
    </>
  )
}
