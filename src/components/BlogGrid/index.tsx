import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne"; 
import CtaHomeOne from "../homes/home-1/CtaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne"; 
import BlogGridArea from "./BlogGridArea";
import Wrapper from "@/layouts/Wrapper";

export default function BlogGrid () {
  
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Breadcrumb title="Blog Grid" pageLink="Blog Grid" />
          <BlogGridArea />
          <CtaHomeOne />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
