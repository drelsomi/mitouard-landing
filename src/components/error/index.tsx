import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import Link from "next/link";
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

export default function NotFound() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="Error" pageLink="Error" />
          <div className="error-section">
            <div className="divider"></div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                  <div className="error-content text-center">
                    <img className="mb-5" src="/assets/img/core-img/404.png" alt="" />
                    <Link href="/" className="btn btn-dark fadeInUp" data-delay="0.5">
                      <span>Back To Home <i className="ti ti-arrow-up-right"></i></span>
                      <span>Back To Home <i className="ti ti-arrow-up-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider"></div>
          </div>
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div> 
    </Wrapper>
  )
}