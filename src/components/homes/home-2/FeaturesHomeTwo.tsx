"use client";

import { useState } from "react";
import Image from "next/image";

export default function FeaturesHomeTwo() {
  // Track which feature is active
  const [activeFeature, setActiveFeature] = useState("feature1img");

  const featureData = [
    {
      id: "feature1img",
      icon: "flaticon-new-features",
      title: "Bibliothèque structurée",
      text: "Documents classés par catégories fiscale, juridique, sociale et autres pour que vos clients trouvent immédiatement le bon dossier.",
      image: "/assets/img/bg-img/82-new.png"
    },
    {
      id: "feature2img",
      icon: "flaticon-update",
      title: "Recherche IA avancée",
      text: "Recherche guidée en langage naturel avec filtres smart pour retrouver un document même hors connexion.",
      image: "/assets/img/bg-img/83.png"
    },
    {
      id: "feature3img",
      icon: "flaticon-tap",
      title: "Consultation offline",
      text: "Mode hors ligne sur tablette et mobile : vos clients ouvrent leurs pièces où qu'ils soient, même sans réseau.",
      image: "/assets/img/bg-img/84.png"
    },
    {
      id: "feature4img",
      icon: "flaticon-trust",
      title: "Accès premium annuel",
      text: "Accès conditionné à un abonnement premium renouvelé chaque année, avec la première année offerte par le cabinet.",
      image: "/assets/img/bg-img/85.png"
    },
  ];

  return (
    <section className="app-feature-section">
      <div className="big-text">Mitouard</div>
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
                <Image
                  key={feature.id}
                  className={`${feature.id} ${activeFeature === feature.id ? "active" : ""}`}
                  src={feature.image}
                  alt={feature.title}
                  width={1000}
                  height={1000}
                  priority
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
