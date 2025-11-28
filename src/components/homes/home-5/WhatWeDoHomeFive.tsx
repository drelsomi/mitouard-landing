"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface ProgressItem {
  id: number;
  label: string;
  value: number;
  delay: number;
}

const progressData: ProgressItem[] = [
  { id: 1, label: "Software Development", value: 80, delay: 0.8 },
  { id: 2, label: "Data Integration", value: 87, delay: 1 },
  { id: 3, label: "Analytics Success", value: 70, delay: 1.2 },
];

export default function WhatWeDoHomeFive() {
  const [progressValues, setProgressValues] = useState<number[]>(
    progressData.map(() => 0)
  );

  const tiltRef = useRef<HTMLImageElement | null>(null);

  // Progress bar animation
  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];

    progressData.forEach((item, index) => {
      const increment = item.value / 50;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= item.value) {
          current = item.value;
          clearInterval(interval);
        }
        setProgressValues((prev) => {
          const newValues = [...prev];
          newValues[index] = Math.round(current);
          return newValues;
        });
      }, 20);

      intervals.push(interval);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  // Tilt effect
  useEffect(() => {
    const image = tiltRef.current;
    if (!image) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = image.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;
      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      image.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="what-we-do-section">
      <div className="divider"></div>

      <div className="what-we-do-img">
        <Image
          ref={tiltRef}
          className="tilt-image img-anim-left w-auto h-auto"
          src="/assets/img/bg-img/80.png"
          alt=""
          width={1920}
          height={1080}
          priority
          style={{ transformStyle: "preserve-3d", transition: "transform 0.2s ease" }}
        />
      </div>

      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-6">
            <div className="section-heading">
              <span className="subtitle fadeInUp" data-delay="0.3">
                What We Do
              </span>
              <h2 className="mb-4 fadeInUp" data-delay="0.5">
                Smarter Insights. Better Business.
              </h2>
              <p className="mb-5 fadeInUp" data-delay="0.7">
                Scale your software operations through a custom engineering team.
                Meet the demand of your company's operations with a high-performing
                nearshore team skilled.
              </p>
            </div>

            <div className="d-flex flex-column gap-4">
              {progressData.map((item, index) => {
                const value = progressValues[index] || 0;
                return (
                  <div
                    key={item.id}
                    className="progress-item fadeInUp"
                    data-delay={item.delay}
                  >
                    <div className="progress-info mb-2">
                      <span>{item.label}</span>
                      <span style={{ marginRight: `${100 - value}%` }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                        >
                          <path
                            d="M7.86602 10.5C7.48112 11.1667 6.51887 11.1667 6.13397 10.5L0.93782 1.5C0.55292 0.833332 1.03405 -2.67268e-07 1.80385 -1.9997e-07L12.1962 7.08554e-07C12.966 7.75852e-07 13.4471 0.833334 13.0622 1.5L7.86602 10.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      <span className="percentage">{value}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar team-progress-bar"
                        role="progressbar"
                        aria-valuenow={value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: `${value}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}
