"use client";
import Marquee3k from 'marquee3000';
import { useEffect } from 'react';


export default function MarqueeArea() {
   useEffect(() => {
    Marquee3k.init();
  }, []);

  return (
    <div className="catagory-slide bg-img" id="catagorySlide" style={{ backgroundImage: "url(/assets/img/core-img/shade.png)" }}>
      <div className="marquee3k" data-speed="1">
        <div>
          <h2 className="d-flex align-items-center">
            <span>#SaaS</span>
            <span>#App</span>
            <span>#Software</span>
            <span>#Startup</span>
            <span>#AI</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
