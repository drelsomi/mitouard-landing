 
import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne"; 
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogArea from "./BlogArea";
import Wrapper from "@/layouts/Wrapper";

 

export default function Blog() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="Blog" pageLink="Blog Standard" />
          <BlogArea />           
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
