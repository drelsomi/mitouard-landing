"use client";

import HeaderFive from "@/layouts/headers/HeaderFive";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeFive from "./HeroHomeFive";
import ServiceHomeFive from "./ServiceHomeFive";
import WhatWeDoHomeFive from "./WhatWeDoHomeFive";
import OurServiceHomeFive from "./OurServiceHomeFive";
import ProjectsHomeFive from "./ProjectsHomeFive";
import ProcessHomeFive from "./ProcessHomeFive";
import TeamHomeFive from "./TeamHomeFive";
import TestimoniaHomeFive from "./TestimoniaHomeFive";
import FaqHomeFive from "./FaqHomeFive";
import CtaHomeFive from "./CtaHomeFive";
import FooterFive from "@/layouts/footers/FooterFive";

export default function HomeFive() {
  return (
    <Wrapper>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroHomeFive />
          <ServiceHomeFive />
          <WhatWeDoHomeFive />
          <OurServiceHomeFive />
          <ProjectsHomeFive />
          <ProcessHomeFive />
          <TeamHomeFive />
          <TestimoniaHomeFive />
          <FaqHomeFive />
          <CtaHomeFive />
          <FooterFive />
        </div>
      </div>
    </Wrapper>
  )
}
