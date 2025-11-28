import Image from "next/image";

export default function ProjectDetailsArea() {
  return (
    <div className="project-details-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- Project Image --> */}
      <div className="custom-container imgZoomInOut mb-5">
        <Image className="project-details-img" src="/assets/img/bg-img/109.jpg" alt="" width={1920} height={1080} priority/>
      </div>

      {/* <!-- Project Content --> */}
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-7 col-lg-8">
            <div className="project-details-content">
              <h2>Atlas Chatart</h2>
              <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a
                book bethas survived not only five when anner year unknown printer eed little help from
                friend from time to time. Although we offer the one-stop convenience. </p>
              <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a
                book bethas survived not only five when anner year unknown printer eed little.</p>
              <div className="row g-4">
                <div className="col-12 col-sm-6">
                  <Image src="/assets/img/bg-img/110.jpg" alt="" width={1920} height={1080} priority/>
                </div>
                <div className="col-12 col-sm-6">
                  <Image src="/assets/img/bg-img/111.jpg" alt="" width={1920} height={1080} priority/>
                </div>
              </div>
              <p>When an unknown printer took ar galley offer type year anddey scrambled make aewer specimen a
                book bethas survived not only five when anner year unknown printer eed little help from
                friend from time to time. Although we offer the one-stop convenience. unknown printer took
                galley type year anddey scrambled. unknown printer.</p>
              <h2>Challenge & Solution</h2>
              <p>Future, as it seeks to lead the industry in technological innovation and sustainable building
                practices to deliver long-lasting value for its clients. -stop convenience. unknown printer
                took galley type year anddey scrambled. unknown printer.</p>
              <h2>Final Result</h2>
              <p>For almost 50 years Leighton Asia, one of the region's largest and mot respected construction
                companies, has been progressively building for a better future by leveraging international
                expertise with local intelligence. In that time Leighton has delivered some of Asia's
                prestigious buildings and transformational infrastructure projects.</p>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            {/* <!-- Project Widget --> */}
            <div className="project-widget">
              <h4 className="widget-title mb-4">Project Details</h4>

              {/* <!-- Project Meta List --> */}
              <ul className="project-meta-list list-unstyled">
                <li>
                  <h6 className="mb-0">Client</h6>
                  <span>:</span>
                  <p className="mb-0">Porter Victoria</p>
                </li>
                <li>
                  <h6 className="mb-0">Category</h6>
                  <span>:</span>
                  <p className="mb-0">Web Development</p>
                </li>
                <li>
                  <h6 className="mb-0">Date</h6>
                  <span>:</span>
                  <p className="mb-0">20 January, 2025</p>
                </li>
                <li>
                  <h6 className="mb-0">Website</h6>
                  <span>:</span>
                  <p className="mb-0"><a href="#">https://startix.com</a></p>
                </li>
              </ul>

              {/* <!-- Social Nav --> */}
              <div className="social-nav mt-4">
                <a href="#">
                  <i className="ti ti-brand-facebook"></i>
                </a>
                <a href="#">
                  <i className="ti ti-brand-linkedin"></i>
                </a>
                <a href="#">
                  <i className="ti ti-brand-x"></i>
                </a>
                <a href="#">
                  <i className="ti ti-brand-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <!-- Project Navigation --> */}
        <div className="project-nav">
          {/* <!-- Previous Project --> */}
          <a href="#" className="prev-nav">
            <div className="icon">
              <i className="ti ti-chevron-left"></i>
            </div>
            <div>
              <p className="mb-1">Prev Project</p>
              <h5 className="mb-0">File uploading System</h5>
            </div>
          </a>

          {/* <!-- Next Project --> */}
          <a href="#" className="next-nav">
            <div>
              <p className="mb-1">Next Project</p>
              <h5 className="mb-0">Design &amp; Development</h5>
            </div>
            <div className="icon">
              <i className="ti ti-chevron-right"></i>
            </div>
          </a>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
