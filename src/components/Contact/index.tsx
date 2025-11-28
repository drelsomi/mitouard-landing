import Breadcrumb from "@/common/Breadcrumb";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import Wrapper from "@/layouts/Wrapper";
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterFive from "@/layouts/footers/FooterFive";
import ContactArea from "./ContactArea";

export default function Contact() {
  return (
     <Wrapper>
      <HeaderTwo ctaLabel="Accueil" ctaHref="/home-2" />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="Contact" pageLink="Contact" />
          <ContactArea />                             
          <CtaHomeOne />
          <FooterFive />
        </div>
      </div>
    </Wrapper>
  )
}
