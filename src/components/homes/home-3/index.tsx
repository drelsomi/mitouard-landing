"use client";

import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeThree from "./HeroHomeThree";
import AboutHomeThree from "./AboutHomeThree";
import ServiceHomeThree from "./ServiceHomeThree";
import ProjectHomeThree from "./ProjectHomeThree";
import TestimonialHomeThree from "./TestimonialHomeThree";
import PricingHomeThree from "./PricingHomeThree";
import FaqHomeThree from "./FaqHomeThree";
import BlogHomeThree from "./BlogHomeThree";
import CtaHomeThree from "./CtaHomeThree";
import FooterThree from "@/layouts/footers/FooterThree";

export default function HomeThree() {
  return (
    <Wrapper>
      <HeaderThree />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroHomeThree />
          <AboutHomeThree />
          <ServiceHomeThree />
          <ProjectHomeThree />
          <TestimonialHomeThree />
          <PricingHomeThree />
          <FaqHomeThree />
          <BlogHomeThree />
          <CtaHomeThree />
          <FooterThree />         
        </div>
      </div>
    </Wrapper>
  )
}