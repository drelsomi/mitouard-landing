import Link from "next/link";

export default function FeaturesHomeFour() {
  return (
    <section className="feature-section mx-md-3 mx-xl-4 rounded-4"
      style={{ backgroundImage: "url(/assets/img/core-img/shade6.png)" }}>
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 g-sm-4">
          <div className="col-12 col-sm-6">
            <div className="section-heading">
              <span className="subtitle"><span>Features</span></span>
              <h2 className="mb-5">Empowering transformation with unique solutions.</h2>
              <Link href="/contact" className="btn btn-primary">
                <span>More Feature <i className="ti ti-arrow-up-right"></i></span>
                <span>More Feature <i className="ti ti-arrow-up-right"></i></span>
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="d-flex flex-column gap-4">
              {/* <!-- Feature Card --> */}
              <div className="feature-card fadeInUp" data-delay="0.5">
                <h2 className="mb-3">Networking</h2>
                <p className="mb-0">Reprehenderit in voluptate officia esse cillum Duis aute irure dolor in
                  dolore eu
                  fugiat nulla
                  pariatur. excepteur sint occaecat cupidatat non excepteur proident,</p>
              </div>

              {/* <!-- Feature Card --> */}
              <div className="feature-card fadeInUp" data-delay="0.6">
                <h2 className="mb-3">Algorithm</h2>
                <p className="mb-0">Voluptate officia esse cillum duis aute irure dolor in reprehenderit in
                  dolore eu
                  fugiat nulla
                  pariatur. excepteur sint occaecat cupidatat non excepteur proident,</p>
              </div>

              {/* <!-- Feature Card --> */}
              <div className="feature-card fadeInUp" data-delay="0.7">
                <h2 className="mb-3">Integration</h2>
                <p className="mb-0">Officia esse cillum Duis aute irure dolor in reprehenderit in voluptate
                  dolore eu
                  fugiat nulla
                  pariatur. excepteur sint occaecat cupidatat non excepteur proident,</p>
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
