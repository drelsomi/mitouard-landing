

export default function HeroArea() {
  return (
    <div className="preview-hero-wrap" style={{ backgroundImage: "url(/assets/img/core-img/shape6.png)" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-9">
            <div className="hero-content">
              <h2 className="text-white mb-4 heading-chars" data-delay="0.5">Creative Multipurpose SaaS
                Landing</h2>
              <p className="text-white mb-5 px-lg-5 fadeInUp" data-delay="0.6">Launch your SaaS with
                style! A sleek,
                multipurpose landing page template crafted for apps, startups, AI solutions, and
                software — built to grab attention and drive conversions.</p>
            </div>
          </div>
        </div>

        {/* <!-- Hero Image Group --> */}
        <div className="hero-img-group pt-lg-5 fadeInUp" data-delay="0.7">
          <img className="img-small" src="/assets/img/demo-img/home4.jpg" alt="" />
          <img className="img-medium" src="/assets/img/demo-img/home2.jpg" alt="" />
          <img className="img-big" src="/assets/img/demo-img/home1.jpg" alt="" />
          <img className="img-medium" src="/assets/img/demo-img/home3.jpg" alt="" />
          <img className="img-small" src="/assets/img/demo-img/home5.jpg" alt="" />
        </div>

        {/* <!-- Background Shape --> */}
        <img className="bg-shape1" src="/assets/img/core-img/curved-arrow2.png" alt="" />
        <img className="bg-shape2" src="/assets/img/core-img/logo-star.png" alt="" />
        <img className="bg-shape3" src="/assets/img/core-img/curved-arrow.png" alt="" />
      </div>
    </div>
  )
}
