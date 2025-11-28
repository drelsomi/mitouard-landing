import Image from "next/image";

export default function ProcessHomeFive() {
  return (
    <section className="process-section bg-secondary">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 g-lg-0 justify-content-center">

          {/* <!-- Process Card --> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="process-card fadeInUp" data-delay="0.5">
              <Image className="w-auto" src="/assets/img/core-img/illustration1.png" alt="" width={1920} height={1080} priority/>
              {/* <!-- Step Number --> */}
              <div className="step-number"><span>Step 01</span></div>
              {/* <!-- Process Body --> */}
              <div className="process-body">
                <h4>Research</h4>
                <p className="mb-0">We are architects innovation trailblazers of technological advancement.</p>
              </div>
            </div>
          </div>

          {/* <!-- Process Card --> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="process-card fadeInUp" data-delay="0.6">
              <Image className="w-auto" src="/assets/img/core-img/illustration2.png" alt="" width={1920} height={1080} priority/>
              {/* <!-- Step Number --> */}
              <div className="step-number"><span>Step 02</span></div>
              {/* <!-- Process Body --> */}
              <div className="process-body">
                <h4>Customize</h4>
                <p className="mb-0">We are architects innovation trailblazers of technological advancement.</p>
              </div>
            </div>
          </div>

          {/* <!-- Process Card --> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="process-card fadeInUp" data-delay="0.7">
              <Image className="w-auto" src="/assets/img/core-img/illustration3.png" alt="" width={1920} height={1080} priority/>
              {/* <!-- Step Number --> */}
              <div className="step-number"><span>Step 03</span></div>
              {/* <!-- Process Body --> */}
              <div className="process-body">
                <h4>Targeting</h4>
                <p className="mb-0">We are architects innovation trailblazers of technological advancement.</p>
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
