import Count from "@/common/count";

export default function HeroHomeOne() {
  return (
    <section className="hero-section" style={{ backgroundImage: "url(/assets/img/core-img/shape6.png)" }}>
      <div className="container">
        <div className="row justify-content-between g-4">
          {/* <!-- Hero Content --> */}
          <div className="col-12 col-md-6 col-lg-6">
            <div className="hero-content">
              <h2 className="text-white mb-0 heading-chars" data-delay="0.5">Commitment Igniting Future Pathways
              </h2>
            </div>
          </div>

          {/* <!-- Hero Content --> */}
          <div className="col-12 col-md-6 col-lg-5">
            <div className="hero-content">
              {/* <!-- Image Group Wrap --> */}
              <div className="img-group-wrap d-flex align-items-center fadeInUp" data-delay="0.5">
                <div className="imgs-group">
                  <img src="/assets/img/bg-img/30.png" alt="" />
                  <img src="/assets/img/bg-img/31.png" alt="" />
                  <div> <Count number={10} text="k" /></div>
                </div>
                <h5 className="mb-0 ms-3">More than 10k+ <br /> trusted customers</h5>
              </div>
              <p className="mt-5 mb-0 text-white heading-line" data-delay="0.6">We transform businesses of most
                major sector
                powerful
                and
                adaptable
                digital
                solutions that satisfy Provide a brief overview of your SaaS product, explaining what it does
                and
                how it can benefit.</p>
            </div>
          </div>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider"></div>

        {/* <!-- Hero Image --> */}
        <div className="hero-image fadeInUp mt-0" data-delay="0.7">
          <img src="/assets/img/bg-img/29.png" alt="" />
        </div>
      </div>
    </section>
  )
}
