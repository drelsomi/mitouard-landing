"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { jarallax } from "jarallax";

interface BreadcrumbProps {
  title?: string;
  pageLink?: string;
}


export default function Breadcrumb({ title, pageLink }: BreadcrumbProps) {


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
    <div className="breadcrumb-section bg-img jarallax" ref={jarallaxRef} data-jarallax="{'speed': 0.6}"
      style={{ backgroundImage: "url(/assets/img/bg-img/86.jpg)" }}>
      <div className="container">
        {/* <!-- Breadcrumb Content --> */}
        <div className="breadcrumb-content">
          <div className="divider"></div>
          <h2>{title}</h2>
          <ul className="list-unstyled">
            <li><Link href="/home-1">Home</Link></li>
            <li>{pageLink}</li>
          </ul>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
