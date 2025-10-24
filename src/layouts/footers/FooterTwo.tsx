"use client";
import { jarallax } from "jarallax";
import Link from "next/link";
import { useEffect, useRef } from "react";


export default function FooterTwo() {

  const jarallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (jarallaxRef.current) {
      jarallax(jarallaxRef.current, { speed: 0.6 });
    }

    return () => {
      if (jarallaxRef.current) {
        jarallax(jarallaxRef.current, "destroy");
      }
    };
  }, []);


  return (
    <footer ref={jarallaxRef} className="footer-section style-two jarallax bg-img" data-jarallax="{'speed': 0.6}"
      style={{ backgroundImage: "url(/assets/img/bg-img/1.jpg)" }}>
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- Newsletter Card --> */}
      <div className="newsletter-card">
        <div className="container">
          <div className="row g-5 justify-content-between align-items-center">
            <div className="col-12 col-md-6">
              <div className="section-heading">
                <h2 className="mb-4 text-white">Subscribe to Our Newsletter!</h2>
                <p className="mb-0 text-white">We will only send you important updates and notices.</p>
              </div>
            </div>

            {/* <!-- Newsletter Form --> */}
            <div className="col-12 col-md-6 col-xl-5">
              <form action="#" className="newsletter-form">
                <input className="form-control" type="email" placeholder="Your email address" />
                <button className="btn btn-primary" type="submit">
                  <span>Subscribe <i className="ti ti-arrow-up-right d-none d-md-block"></i></span>
                  <span>Subscribe <i className="ti ti-arrow-up-right d-none d-md-block"></i></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container">
        <div className="border-top"></div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-5 g-md-4 g-xl-5">
          {/* <!-- Footer Card --> */}
          <div className="col-12 col-sm-6 col-md-4 col-xl-5">
            <div className="footer-card me-xl-5">
              {/* <!-- Footer Logo --> */}
              <Link href="/home-2" className="footer-logo mb-4">
                <img src="/assets/img/core-img/logo-light.png" alt="" />
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
          <div
            className="d-flex flex-wrap justify-content-center align-items-center justify-content-md-between gap-3 gap-lg-4">
            <p className="mb-0 copyright style-two">Copyright © {new Date().getFullYear()} <a href="https://themeforest.net/user/designing-world" target="_blank">Designing World</a> All rights reserved.</p>

            {/* <!-- Copyright Nav --> */}
            <ul className="copyright-nav justify-content-center list-unstyled d-flex flex-wrap gap-3 gap-lg-4">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Legal Agreement</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
