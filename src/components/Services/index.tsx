import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ServicesArea from "./ServicesArea";
import PricingHomeOne from "../homes/home-1/PricingHomeOne";
import TestimoniaHomeOne from "../homes/home-1/TestimoniaHomeOne";

export default function Services() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="Services" pageLink="Services" />
          <ServicesArea />
          <PricingHomeOne />
          <TestimoniaHomeOne />           
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}