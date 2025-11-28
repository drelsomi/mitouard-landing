import Image from "next/image";

export default function AboutHomeFour() {
  return (
    <div className="about-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      {/* <!-- About Content --> */}
      <div className="container">
        <div className="about-content fadeInUp" data-delay="0.5">
          <h2>We are a full-Service Agency in AI Automation.</h2>
          <Image src="/assets/img/bg-img/61.png" alt="" width={1920} height={1080} priority/>
          <h2>We Transform into <span className="text-primary">AI-Driven</span> Industries Leader.</h2>
          <Image src="/assets/img/bg-img/62.png" alt="" width={1920} height={1080} priority/>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
