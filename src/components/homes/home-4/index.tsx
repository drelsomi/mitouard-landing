import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";
import HeroHomFour from "./HeroHomFour";
import AboutHomeFour from "./AboutHomeFour";
import FeaturesHomeFour from "./FeaturesHomeFour";
import ServiceHomeFour from "./ServiceHomeFour";
import VideoHomeFour from "./VideoHomeFour";
import ProjectHomeFour from "./ProjectHomeFour";
import PricingHomeFour from "./PricingHomeFour";
import FaqHomeFour from "./FaqHomeFour";
import BlogHomeFour from "./BlogHomeFour";
import FooterFour from "@/layouts/footers/FooterFour";
import TestimonialHomeFour from "./TestimonialHomeFour";

export default function HomeFour() {
  return (
      <Wrapper>
        <HeaderFour />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <HeroHomFour />
            <AboutHomeFour />
            <FeaturesHomeFour />
            <ServiceHomeFour />
            <VideoHomeFour />
            <ProjectHomeFour />
            <TestimonialHomeFour />
            <PricingHomeFour />
            <FaqHomeFour />
            <BlogHomeFour />
            <FooterFour />
          </div>
        </div>
      </Wrapper>
  )
}
