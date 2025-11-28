"use client";

import { useState } from "react";

export default function PricingHomeOne() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section
      className="pricing-section bg-secondary"
      style={{ backgroundImage: "url(/assets/img/core-img/shape2.png)" }}
    >
      {/* Divider */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Our Pricing Plan</span>
              <h2 className="mb-4">Pricing that's Affordable For Everyone</h2>
            </div>

            {/* Price Plan Switch */}
            <div className="price-plan-switch">
              <div className="form-check form-switch d-flex justify-content-center align-items-center gap-2"> 
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Monthly</label>
                <input className="form-check-input mt-0" type="checkbox" 
                checked={isYearly}
                  onChange={handleToggle} id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Yearly</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* Pricing Cards */}
          {[
            {
              id: 1,
              title: "Basic Plan",
              subtitle: "Best suits for great company!",
              monthly: "$00.00",
              yearly: "$00.00",
              features: [
                true, true, true, false, false, false
              ],
              delay: '0.2',
            },
            {
              id: 2,
              title: "Standard Plan",
              subtitle: "Best suits for great company!",
              monthly: "$49.00",
              yearly: "$199.00",
              features: [
                true, true, true, true, false, false
              ],
              delay: '0.6',
            },
            {
              id: 3,
              title: "Premium Plan",
              subtitle: "Best suits for great company!",
              monthly: "$99.00",
              yearly: "$299.00",
              features: [
                true, true, true, true, true, true
              ],
              delay: '1.0',
            },
          ].map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 fadeInUp" data-delay={plan.delay}>
              <div className="pricing-card translateY10">
                {/* Pricing Header */}
                <div className="pricing-header text-center">
                  <h5>{plan.title}</h5>
                  <p>{plan.subtitle}</p>
                  <h2 className="mb-0">
                    {isYearly ? plan.yearly : plan.monthly}
                    <span>{isYearly ? "/year" : "/month"}</span>
                  </h2>
                </div>

                {/* Pricing Content */}
                <ul className="pricing-content list-unstyled">
                  {[
                    "Limited Access Library",
                    "Commercial License",
                    "Hotline Support 24/7",
                    "100+ HTML UI Elements",
                    "WooCommerce Builder",
                    "Updates for 1 Year",
                  ].map((feature, index) => (
                    <li key={index}>
                      <span className={plan.features[index] ? "yes" : "no"}></span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing Footer */}
                <div className="pricing-footer">
                  <a
                    href="#"
                    className={`btn ${plan.id === 2 ? "btn-primary" : "btn-dark"} w-100`}
                  >
                    <span>{plan.id === 1 ? "Get Your Free Plan" : "Get Started Now"}</span>
                    <span>{plan.id === 1 ? "Get Your Free Plan" : "Get Started Now"}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>
    </section>
  );
}