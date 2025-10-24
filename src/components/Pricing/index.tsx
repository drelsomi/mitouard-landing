"use client";
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import PricingHomeOne from "../homes/home-1/PricingHomeOne";
import FaqHomeOne from "../homes/home-1/FaqHomeOne";



export default function Pricing() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="Pricing Plan" pageLink="Pricing" />
          <PricingHomeOne />
          <FaqHomeOne />
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
