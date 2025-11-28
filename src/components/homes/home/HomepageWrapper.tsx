import Count from "@/common/count";
import Link from "next/link";
import Image from "next/image";

export default function HomepageWrapper() {
  return (
    <div className="homepage-wrap">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <h2 className="mb-3"><span className="d-block counter"><Count number={5} add_style={true} /> </span>Unique Stunning Homepage</h2>
              <p className="mb-0">A sleek, multipurpose landing page template crafted for apps, startups,
                AI solutions, and software — built to grab attention and drive conversions.</p>
            </div>
          </div>
        </div>

        <div className="divider-sm"></div>

        <div className="row g-5 justify-content-center">
          {/* <!-- Home Page Card --> */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/home1.jpg" alt="" width={1920} height={1080} priority/>
              <Link href="/home-1" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
            <h3 className="mb-0 text-center mt-4">SaaS Landing</h3>
          </div>

          {/* <!-- Home Page Card --> */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/home2.jpg" alt="" width={1920} height={1080} priority/>
              <Link href="/home-2" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
            <h3 className="mb-0 text-center mt-4">App Landing</h3>
          </div>

          {/* <!-- Home Page Card --> */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/home3.jpg" alt="" width={1920} height={1080} priority/>
              <Link href="/home-3" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
            <h3 className="mb-0 text-center mt-4">Startup Landing</h3>
          </div>

          {/* <!-- Home Page Card --> */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/home4.jpg" alt="" width={1920} height={1080} priority/>
              <Link href="/home-4" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
            <h3 className="mb-0 text-center mt-4">AI Landing</h3>
          </div>

          {/* <!-- Home Page Card --> */}
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="homepage-card">
              <Image className="w-auto h-auto" src="/assets/img/demo-img/home5.jpg" alt="" width={1920} height={1080} priority/>
              <Link href="/home-5" target="_blank" className="shadow-lg">
                <i className="ti ti-arrow-up-right"></i>
              </Link>
            </div>
            <h3 className="mb-0 text-center mt-4">Software Landing</h3>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}