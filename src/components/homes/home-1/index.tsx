"use client";

import FaqHomeOne from "./FaqHomeOne";
import CtaHomeOne from "./CtaHomeOne";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeOne from "./HeroHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import BrandsHomeOne from "./BrandsHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import FeaturesHomeOne from "./FeaturesHomeOne";
import HowWeWorkHomeOne from "./HowWeWorkHomeOne";
import TestimoniaHomeOne from "./TestimoniaHomeOne";
import IntegrationHomeOne from "./IntegrationHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

export default function HomeOne() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroHomeOne />
          <BrandsHomeOne />
          <HowWeWorkHomeOne />
          <AboutHomeOne />
          <FeaturesHomeOne />
          <PricingHomeOne />
          <TestimoniaHomeOne />
          <IntegrationHomeOne />
          <FaqHomeOne />
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
