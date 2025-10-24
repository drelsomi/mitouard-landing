
export default function TeamContactArea() {
  return (
    <section className="team-contact-section bg-secondary">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8">
            <div className="section-heading text-center">
              <span className="subtitle">Contact Me</span>
              <h2 className="mb-0">Have Questions? Contact us!</h2>
            </div>

            {/* <!-- Divider --> */}
            <div className="divider-sm"></div>

            <form action="#">
              <div className="row g-4">
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your name" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email address" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Your phone" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Type your message"></textarea>
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
  )
}
