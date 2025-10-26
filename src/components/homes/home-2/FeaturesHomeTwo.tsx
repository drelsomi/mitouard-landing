"use client";

import { useState } from "react";

export default function FeaturesHomeTwo() {
  // Track which feature is active
  const [activeFeature, setActiveFeature] = useState("feature1img");

  const featureData = [
    {
      id: "feature1img",
      icon: "flaticon-new-features",
      title: "Fully Secured",
      text: "Zealously necessary breakfast. Surrounded motionless she end literature. Gay direction .supported yet her entertaining."
    },
    {
      id: "feature2img",
      icon: "flaticon-update",
      title: "Regular Updates",
      text: "Zealously necessary breakfast. Surrounded motionless she end literature. Gay direction .supported yet her entertaining."
    },
    {
      id: "feature3img",
      icon: "flaticon-tap",
      title: "Easy to Use",
      text: "Zealously necessary breakfast. Surrounded motionless she end literature. Gay direction .supported yet her entertaining."
    },
    {
      id: "feature4img",
      icon: "flaticon-trust",
      title: "Dedicated Support",
      text: "Zealously necessary breakfast. Surrounded motionless she end literature. Gay direction .supported yet her entertaining."
    },
  ];

  return (
    <section className="app-feature-section">
      <div className="big-text">Features</div>
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Feature Cards */}
          <div className="col-12 col-md-4">
            <div className="feature-cards d-flex flex-column">
              {featureData.slice(0, 2).map((feature) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className={`app-feature-card text-md-end ${activeFeature === feature.id ? "active" : ""}`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h2 className="mb-3">{feature.title}</h2>
                  <p className="mb-0">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Images */}
          <div className="col-12 col-md-4">
            <div className="app-feature-img">
              {featureData.map((feature) => (
                <img
                  key={feature.id}
                  className={`${feature.id} ${activeFeature === feature.id ? "active" : ""}`}
                  src={`/assets/img/bg-img/${82 + featureData.indexOf(feature)}.png`}
                  alt={feature.title}
                />
              ))}
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="col-12 col-md-4">
            <div className="feature-cards d-flex flex-column">
              {featureData.slice(2).map((feature) => (
                <div
                  key={feature.id}
                  id={feature.id}
                  className={`app-feature-card ${activeFeature === feature.id ? "active" : ""}`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h2 className="mb-3">{feature.title}</h2>
                  <p className="mb-0">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}
