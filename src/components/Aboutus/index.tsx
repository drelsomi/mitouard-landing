"use client";

import AboutArea from "./AboutArea";
import AboutStory from "./AboutStory";
import AboutTeam from "./AboutTeam";
import Wrapper from "@/layouts/Wrapper";
import Breadcrumb from "@/common/Breadcrumb";
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import TestimoniaHomeOne from "../homes/home-1/TestimoniaHomeOne";
import IntegrationHomeOne from "../homes/home-1/IntegrationHomeOne";

export default function Aboutus() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="About Us" pageLink="About Us" />
          <AboutArea />
          <IntegrationHomeOne />
          <AboutStory />
          <AboutTeam />
          <TestimoniaHomeOne />
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
