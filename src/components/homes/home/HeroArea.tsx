import Image from "next/image";

export default function HeroArea() {
  return (
    <div className="preview-hero-wrap" style={{ backgroundImage: "url(/assets/img/core-img/shape6.png)" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-9">
            <div className="hero-content">
              <h2 className="text-white mb-4 heading-word" data-delay="0.5">Creative Multipurpose SaaS
                Landing</h2>
              <p className="text-white mb-5 px-lg-5 fadeInUp" data-delay="0.7">Launch your SaaS with
                style! A sleek,
                multipurpose landing page template crafted for apps, startups, AI solutions, and
                software — built to grab attention and drive conversions.</p>
            </div>
          </div>
        </div>

        {/* <!-- Hero Image Group --> */}
        <div className="hero-img-group pt-lg-5 fadeInUp" data-delay="0.8">
          <Image className="img-small w-auto h-auto" src="/assets/img/demo-img/home4.jpg" alt="" width={1920} height={1080} priority/>
          <Image className="img-medium w-auto h-auto" src="/assets/img/demo-img/home2.jpg" alt="" width={1920} height={1080} priority/>
          <Image className="img-big w-auto h-auto" src="/assets/img/demo-img/home1.jpg" alt="" width={1920} height={1080} priority/>
          <Image className="img-medium w-auto h-auto" src="/assets/img/demo-img/home3.jpg" alt="" width={1920} height={1080} priority/>
          <Image className="img-small w-auto h-auto" src="/assets/img/demo-img/home5.jpg" alt="" width={1920} height={1080} priority/>
        </div>

        {/* <!-- Background Shape --> */}
        <Image className="bg-shape1 w-auto h-auto" src="/assets/img/core-img/curved-arrow2.png" alt="" width={1920} height={1080} priority/>
        <Image className="bg-shape2 w-auto h-auto" src="/assets/img/core-img/logo-star.png" alt="" width={1920} height={1080} priority/>
        <Image className="bg-shape3 w-auto h-auto" src="/assets/img/core-img/curved-arrow.png" alt="" width={1920} height={1080} priority/>
      </div>
    </div>
  )
}
