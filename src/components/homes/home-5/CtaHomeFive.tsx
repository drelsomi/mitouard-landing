import Link from "next/link";

export default function CtaHomeFive() {
  return (
    <section className="cta-section bg-img bg-dark" style={{ backgroundImage: "url(/assets/img/core-img/shade2.png)" }}>
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- CTA Content --> */}
      <div className="cta-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-lg-8">
              <div className="text-center">
                <h2 className="mb-4 text-white heading-chars" data-delay="0.5">Sign Up for Your Free 14 Day Trial
                  Now!</h2>
                <p className="mb-5 text-white fadeInUp" data-delay="0.6">Join 13k+ teams who have streamlined the
                  way they manage projects and collaborate remotely.</p>
                <Link href="/contact" className="btn btn-light fadeInUp" data-delay="0.7">
                  <span>Get Started Now <i className="ti ti-arrow-up-right"></i></span>
                  <span>Get Started Now <i className="ti ti-arrow-up-right"></i></span>
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