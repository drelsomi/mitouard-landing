"use client";

import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceDetailsArea from "./ServiceDetailsArea";

export default function ServiceDetails() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="Service Details" pageLink="Service Details" />
          <ServiceDetailsArea />                      
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
