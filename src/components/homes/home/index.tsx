import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroArea from "./HeroArea";
import MarqueeArea from "./MarqueeArea";
import HomepageWrapper from "./HomepageWrapper";
import FeaturesArea from "./FeaturesArea";
import OuthersPages from "./OuthersPages";
import TestimoniaArea from "./TestimoniaArea";
import Footer from "./Footer";
import Wrapper from "@/layouts/Wrapper";

export default function HomePreview() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroArea />
          <MarqueeArea />
          <HomepageWrapper />
          <FeaturesArea />
          <OuthersPages />
          <TestimoniaArea />
          <Footer />
        </div>
      </div>
    </Wrapper>
  )
}