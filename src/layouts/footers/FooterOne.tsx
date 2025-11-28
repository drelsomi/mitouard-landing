import Link from "next/link";
import Image from "next/image";

export default function FooterOne() {
  return (
    <footer className="footer-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 g-md-4 g-xl-5">
          {/* <!-- Footer Card --> */}
          <div className="col-12 col-sm-6 col-md-4 col-xl-5">
            <div className="footer-card me-lg-5">
              {/* <!-- Footer Logo --> */}
              <Link href="/home-1" className="footer-logo mb-4">
                <Image className="w-auto h-auto" src="/assets/img/core-img/logo.png" alt="" width={1920} height={1080} priority/>
              </Link>
              <p>Each demo built with Teba will look different. You can customize almost anything appearance
                of your website with only a few.</p>
              {/* <!-- Social Nav --> */}
              <div className="social-nav">
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

          {/* <!-- Footer Card --> */}
          <div className="col-12 col-sm-6 col-md">
            <div className="footer-card">
              <h5 className="mb-4">Pages</h5>
              <ul className="list-unstyled footer-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* <!-- Footer Card --> */}
          <div className="col-12 col-sm-6 col-md">
            <div className="footer-card">
              <h5 className="mb-4">Utility Pages</h5>
              <ul className="list-unstyled footer-nav">
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Projects Details</a></li>
              </ul>
            </div>
          </div>

          {/* <!-- Footer Card --> */}
          <div className="col-12 col-sm-6 col-md">
            <div className="footer-card">
              <h5 className="mb-4">Information</h5>
              <ul className="list-unstyled footer-nav">
                <li><a href="#">Working Process</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- Copyright --> */}
      <div className="container">
        <div className="copyright-section">
          <p className="mb-0 copyright">Copyright © {new Date().getFullYear()} <a
            href="https://themeforest.net/user/designing-world" target="_blank">Designing World</a> All
            rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
