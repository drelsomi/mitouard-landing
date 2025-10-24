"use client";
import Count from "@/common/count";
import VideoPopup from "@/modal/VideoPopup";
import { useEffect, useRef } from "react";
import { jarallax } from "jarallax";



export default function FunfactHomeTwo() {

   const jarallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (jarallaxRef.current) {
      jarallax(jarallaxRef.current, { speed: 0.6 });
    }

    return () => {
      if (jarallaxRef.current) {
        jarallax(jarallaxRef.current, "destroy");
      }
    };
  }, []);



  return (
    <section ref={jarallaxRef} className="app-cool-facts-section jarallax bg-img" data-jarallax="{'speed': 0.6}"
      style={{ backgroundImage: "url('/assets/img/bg-img/41.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="section-heading">
              <h2 className="mb-4 text-white">Mastering Productivity One Task At a Time</h2>
              <p className="mb-5 text-white">Assure users that your SaaS product is secure and compliant with
                industry
                standards
                and regulations. Highlight any security features or measures that are in place to protect
                user data
                and ensure compliance with relevant regulations.</p>
            </div>
            {/* <!-- App Cool Facts Card --> */}
            <div className="app-cool-facts-card">
              <div>
                <h2><span className="counter"> <Count number={18} text="K" add_style={true} /> </span></h2>
                <h5 className="mb-0">App Downloads</h5>
              </div>
              <div>
                <h2><span className="counter"> <Count number={98} text="%" add_style={true} /> </span></h2>
                <h5 className="mb-0">Positive Rating</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Play Video --> */}
      <VideoPopup>
        <div className="app-video">
          <div className="play-video-btn video-btn" data-video="https://youtu.be/VCPGMjCW0is">
            <div className="icon">
              <i className="ti ti-player-play-filled"></i>
            </div>
            <h5 className="mb-0">Play Intro</h5>
          </div>
        </div>
      </VideoPopup>

    </section>
  )
}

