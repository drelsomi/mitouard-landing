"use client";
import dynamic from "next/dynamic";
const FunfactHomeTwo = dynamic(
  () => import("./FunfactHomeTwo"),
  { ssr: false }  
);

import HeaderTwo from '@/layouts/headers/HeaderTwo'
import Wrapper from '@/layouts/Wrapper' 
import HeroHomeTwo from './HeroHomeTwo'
import FeaturesHomeTwo from './FeaturesHomeTwo'
import AboutHomeTwo from './AboutHomeTwo'
import InterfaceHomeTwo from './InterfaceHomeTwo'
import PricingHomeTwo from './PricingHomeTwo'
import TestimonialHomeTwo from './TestimonialHomeTwo'
import FaqHomeOne from '../home-1/FaqHomeOne'
import CtaHomeTwo from './CtaHomeTwo'
import BlogHomeTwo from './BlogHomeTwo'
import FooterTwo from '@/layouts/footers/FooterTwo'
import SvgIconTwo from '@/svg/SvgIconTwo'

export default function HomeTwo() {
  return (
    <Wrapper>
      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroHomeTwo />
          <FeaturesHomeTwo />
          <FunfactHomeTwo />
          <AboutHomeTwo />
          <InterfaceHomeTwo />
          <PricingHomeTwo />
          <TestimonialHomeTwo />
          <FaqHomeOne />
          <CtaHomeTwo />
          <BlogHomeTwo />
          <FooterTwo />
        </div>
      </div>
      <SvgIconTwo />
    </Wrapper>
  )
}
