import Link from "next/link";


export default function ServiceHomeThree() {
  return (
    <div className="service-section bg-secondary">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Our Services</span>
              <h2 className="mb-0">Wide Range of SaaS Solutions</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-4">
          {/* <!-- Service Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div className="service-card style-two fadeInUp" data-delay="0.5">
              <div className="service-icon">
                <i className="flaticon-support-1"></i>
              </div>
              <h4 className="mb-4">Customer Support</h4>
              <p className="mb-0">Experience the ultimate managemen solution that seamlessly integrates CRM,
                Experience
                the ultimate business.</p>
            </div>
          </div>

          {/* <!-- Service Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div className="service-card style-two fadeInUp" data-delay="0.6">
              <div className="service-icon">
                <i className="flaticon-coding"></i>
              </div>
              <h4 className="mb-4">Project Management</h4>
              <p className="mb-0">Experience the ultimate managemen solution that seamlessly integrates CRM,
                Experience
                the ultimate business.</p>
            </div>
          </div>

          {/* <!-- Service Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div className="service-card style-two fadeInUp" data-delay="0.7">
              <div className="service-icon">
                <i className="flaticon-email"></i>
              </div>
              <h4 className="mb-4">Email Marketing</h4>
              <p className="mb-0">Experience the ultimate managemen solution that seamlessly integrates CRM,
                Experience
                the ultimate business.</p>
            </div>
          </div>

          {/* <!-- Service Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div className="service-card style-two fadeInUp" data-delay="0.8">
              <div className="service-icon">
                <i className="flaticon-analysis"></i>
              </div>
              <h4 className="mb-4">Human Resources</h4>
              <p className="mb-0">Experience the ultimate managemen solution that seamlessly integrates CRM,
                Experience
                the ultimate business.</p>
            </div>
          </div>

          {/* <!-- Service Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div className="service-card style-two fadeInUp" data-delay="0.9">
              <div className="service-icon">
                <i className="flaticon-cyber-security"></i>
              </div>
              <h4 className="mb-4">Cyber Security</h4>
              <p className="mb-0">Experience the ultimate managemen solution that seamlessly integrates CRM,
                Experience
                the ultimate business.</p>
            </div>
          </div>

          {/* <!-- Service Card --> */}
          <div className="col-12 col-sm-6 col-lg-4 translateY10">
            <div
              className="service-card style-two bg-transparent d-flex align-items-center justify-content-center fadeInUp"
              data-delay="1.0">
              <Link className="btn-service" href="/services">
                <span><i className="ti ti-arrow-up-right"></i></span>
                <h4 className="mb-0">View All Services</h4>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
