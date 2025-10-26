"use client";

import { useEffect, useState } from "react";

interface ProgressItem {
  id: number;
  label: string;
  value: number;
}

const progressData: ProgressItem[] = [
  { id: 1, label: "Expertise & Experience", value: 90 },
  { id: 2, label: "Innovative Solutions", value: 80 },
  { id: 3, label: "Cost Efficiency", value: 85 },
];

export default function TeamDetailsArea() {
  const [progressValues, setProgressValues] = useState<number[]>(
    progressData.map(() => 0)
  );

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

  return (
    <div className="team-details-section">
      {/* Divider */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-md-6">
            <div className="pe-xl-4">
              <img className="w-100" src="/assets/img/bg-img/120.jpg" alt="" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="team-details-content ps-xl-4">
              <h2 className="mb-3">Brooklyn Simmons</h2>
              <h5 className="mb-4 text-primary">Practice Attorney</h5>
              <p className="mb-5">
                A content management system helps you create, manage, a publish
                content on the web. It also keep content organized and accessible
                so it can be used and repurposed effectively.
              </p>

              <h5>Email Address</h5>
              <p className="mb-4">needhelp@yourdomain.com</p>

              <h5>Phone Number</h5>
              <p className="mb-4">+012-3456-789</p>

              <h5>Web Address</h5>
              <p className="mb-5">https://yourdomain.com</p>

              {/* Social Nav */}
              <div className="social-nav">
                <a href="#">
                  <i className="ti ti-brand-facebook"></i>
                </a>
                <a href="#">
                  <i className="ti ti-brand-linkedin"></i>
                </a>
                <a href="#">
                  <i className="ti ti-brand-x"></i>
                </a>
                <a href="#">
                  <i className="ti ti-brand-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-md-6">
            <div className="experience-info pe-lg-5">
              <h2 className="mb-4">Personal Information</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem nesciunt. Adipisci velit, aliquam quaerat voluptatem.
              </p>
              <p className="mb-0">
                Neque porro quisquam est, qui dolorem ipsum quia dolor consectetur,
                consectetur adipisci velit, aliquam quaerat voluptatem.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h2 className="mb-4">Experience Area</h2>
            <div className="d-flex flex-column gap-4">
              {progressData.map((item, index) => {
                const value = progressValues[index] || 0;
                return (
                  <div key={item.id} className="progress-item">
                    <div className="progress-info mb-2">
                      <span>{item.label}</span>
                      <span style={{ marginRight: `${value}` }}>{value}%</span>
                    </div>
                    <div className="progress">
                      <div
                        className="progress-bar team-progress-bar"
                        role="progressbar"
                        aria-valuenow={value}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: `${value}%`}}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider"></div>
    </div>
  );
}
