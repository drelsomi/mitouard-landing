import Link from "next/link";


export default function CtaHomeOne() {
  return (
    <section className="cta-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- Circles --> */}
      <div className="cta-circles">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* <!-- CTA Content --> */}
      <div className="cta-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8">
              <div className="text-center">
                <h2 className="mb-4 text-white heading-chars" data-delay="0.5">Sign Up for Your Free 14 Day Trial
                  Now!</h2>
                <p className="mb-5 text-white fadeInUp" data-delay="0.75">Join 13k+ teams who have streamlined
                  the way they manage projects and collaborate remotely.</p>
                {/* <!-- Button Group --> */}
                <div className="d-flex flex-wrap gap-4 justify-content-center">
                  <Link href="/contact" className="btn btn-dark fadeInUp" data-delay="0.8">
                    <span>Get Started Now <i className="ti ti-arrow-up-right"></i></span>
                    <span>Get Started Now <i className="ti ti-arrow-up-right"></i></span>
                  </Link>
                  <Link href="/contact" className="btn btn-light fadeInUp" data-delay="0.9">
                    <span>Request Free Demo <i className="ti ti-arrow-up-right"></i></span>
                    <span>Request Free Demo <i className="ti ti-arrow-up-right"></i></span>
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
