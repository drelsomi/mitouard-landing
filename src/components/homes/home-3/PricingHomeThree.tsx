export default function PricingHomeThree() {
  return (
    <section className="pricing-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Pricing Plan</span>
              <h2 className="mb-4">Data Solutions For Startup</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="pricing-card style-two fadeInUp" data-delay="0.5">
              {/* <!-- Pricing Header --> */}
              <div className="pricing-header">
                <h4>Basic Package</h4>
                <p>Pricing plan for Digital Transformation</p>
                <hr />
                <h2 className="mb-0">$9.00<span>/Monthly</span></h2>
              </div>
              {/* <!-- Pricing Content --> */}
              <ul className="pricing-content list-unstyled">
                <li><span className="yes"></span> Limited Access Library</li>
                <li><span className="yes"></span> Commercia License</li>
                <li><span className="yes"></span> Hotline Support 24/7</li>
                <li><span className="yes"></span> 100+ HTML UI Elements</li>
                <li><span className="no"></span> WooCommerce Builder</li>
                <li><span className="no"></span> Updates for 1 Year</li>
              </ul>
              {/* <!-- Pricing Footer --> */}
              <div className="pricing-footer">
                <a href="#" className="btn btn-dark w-100">
                  <span>Choose Package <i className="ti ti-arrow-up-right"></i></span>
                  <span>Choose Package <i className="ti ti-arrow-up-right"></i></span>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="pricing-card style-two active fadeInUp" data-delay="0.6">
              {/* <!-- Pricing Header --> */}
              <div className="pricing-header">
                <h4>Standard Package</h4>
                <p>Pricing plan for Digital Transformation</p>
                <hr />
                <h2 className="mb-0">$19.00<span>/Monthly</span></h2>
              </div>
              {/* <!-- Pricing Content --> */}
              <ul className="pricing-content list-unstyled">
                <li><span className="yes"></span> Limited Access Library</li>
                <li><span className="yes"></span> Commercia License</li>
                <li><span className="yes"></span> Hotline Support 24/7</li>
                <li><span className="yes"></span> 100+ HTML UI Elements</li>
                <li><span className="yes"></span> WooCommerce Builder</li>
                <li><span className="no"></span> Updates for 1 Year</li>
              </ul>
              {/* <!-- Pricing Footer --> */}
              <div className="pricing-footer">
                <a href="#" className="btn btn-primary w-100">
                  <span>Choose Package <i className="ti ti-arrow-up-right"></i></span>
                  <span>Choose Package <i className="ti ti-arrow-up-right"></i></span>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-md-6 col-lg-4 translateY10">
            <div className="pricing-card style-two fadeInUp" data-delay="0.7">
              {/* <!-- Pricing Header --> */}
              <div className="pricing-header">
                <h4>Premium Package</h4>
                <p>Pricing plan for Digital Transformation</p>
                <hr />
                <h2 className="mb-0">$39.00<span>/Monthly</span></h2>
              </div>
              {/* <!-- Pricing Content --> */}
              <ul className="pricing-content list-unstyled">
                <li><span className="yes"></span> Limited Access Library</li>
                <li><span className="yes"></span> Commercia License</li>
                <li><span className="yes"></span> Hotline Support 24/7</li>
                <li><span className="yes"></span> 100+ HTML UI Elements</li>
                <li><span className="yes"></span> WooCommerce Builder</li>
                <li><span className="yes"></span> Updates for 1 Year</li>
              </ul>
              {/* <!-- Pricing Footer --> */}
              <div className="pricing-footer">
                <a href="#" className="btn btn-dark w-100">
                  <span>Choose Package <i className="ti ti-arrow-up-right"></i></span>
                  <span>Choose Package <i className="ti ti-arrow-up-right"></i></span>
                </a>
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
