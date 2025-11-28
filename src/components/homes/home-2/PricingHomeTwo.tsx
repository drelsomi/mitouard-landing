"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const brands = [
  "/assets/img/partner-img/1.png",
  "/assets/img/partner-img/2.png",
  "/assets/img/partner-img/3.png",
  "/assets/img/partner-img/4.png",
  "/assets/img/partner-img/5.png",
  "/assets/img/partner-img/1.png",
  "/assets/img/partner-img/2.png",
  "/assets/img/partner-img/3.png",
  "/assets/img/partner-img/4.png",
  "/assets/img/partner-img/5.png",
];

export default function PricingHomeTwo() {
  return (
    <section className="pricing-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 g-lg-4">
          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-md-7 col-lg-4">
            <div className="section-heading">
              <span className="subtitle">Accès premium</span>
              <h2 className="mb-4">Une offre simple</h2>
              <p className="mb-5">L’application Le Mitouard est incluse la première année. Le renouvellement se fait ensuite annuellement pour garder l’accès à toute la bibliothèque.</p>
              <a href="#" className="btn btn-primary">
                <span>Parler à un conseiller <i className="ti ti-arrow-up-right"></i></span>
                <span>Parler à un conseiller <i className="ti ti-arrow-up-right"></i></span>
              </a>
            </div>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="pricing-card style-three translateY10 fadeInUp" data-delay="0.2">
              {/* <!-- Pricing Header --> */}
              <div className="pricing-header">
                <h4>Première année offerte</h4>
                <p>Accès premium dès l'arrivée au cabinet Le Mitouard.</p>
                <h2 className="mb-0">Offert<span>/1ère année</span></h2>
              </div>
              {/* <!-- Pricing Footer --> */}
              <div className="pricing-footer">
                <a href="#" className="btn btn-light w-100">
                  <span>Activer pour un client <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                  <span>Activer pour un client <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                </a>
              </div>
              {/* <!-- Pricing Content --> */}
              <ul className="pricing-content list-unstyled">
                <li><span className="yes"></span> Accès complet aux 4 catégories</li>
                <li><span className="yes"></span> Recherche IA et mode offline</li>
                <li><span className="yes"></span> Support dédié par le cabinet</li>
                <li><span className="yes"></span> Tablette & mobile inclus</li>
              </ul>
            </div>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="pricing-card style-three translateY10 fadeInUp" data-delay="0.6">
              {/* <!-- Pricing Header --> */}
              <div className="pricing-header">
                <h4>Renouvellement annuel</h4>
                <p>Renouvellement simple pour prolonger l’accès premium après la première année.</p>
                <h2 className="mb-0">Sur devis<span>/an</span></h2>
              </div>
              {/* <!-- Pricing Footer --> */}
              <div className="pricing-footer">
                <a href="#" className="btn btn-light w-100">
                  <span>Planifier le renouvellement <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                  <span>Planifier le renouvellement <i className="d-none d-md-block ti ti-arrow-up-right"></i></span>
                </a>
              </div>
              {/* <!-- Pricing Content --> */}
              <ul className="pricing-content list-unstyled">
                <li><span className="yes"></span> Bibliothèque sécurisée complète</li>
                <li><span className="yes"></span> IA, offline & synchronisation multi-appareils</li>
                <li><span className="yes"></span> Support prioritaire</li>
                <li><span className="yes"></span> Renouvellement annuel transparent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Partner Content removed as requested --> */}
    </section>
  )
}
