"use client";
import { useState } from "react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  img: string;
};

const members: TeamMember[] = [
  { id: 1, name: "Miler Michel", role: "Front end Developer", img: "assets/img/bg-img/112.jpg" },
  { id: 2, name: "Brooklyn Simmons", role: "Founder & CCO", img: "assets/img/bg-img/113.jpg" },
  { id: 3, name: "Harry Brush", role: "Web Developer", img: "assets/img/bg-img/114.jpg" },
  { id: 4, name: "Mariana mia", role: "Founder & CCO", img: "assets/img/bg-img/115.jpg" },
  { id: 5, name: "Dianne Russell", role: "HR Manager", img: "assets/img/bg-img/116.jpg" },
  { id: 6, name: "Tonya Martin", role: "HR Manager", img: "assets/img/bg-img/117.jpg" },
  { id: 7, name: "Jacob Jones", role: "Founder & CCO", img: "assets/img/bg-img/118.jpg" },
  { id: 8, name: "David Taylor", role: "Founder & CCO", img: "assets/img/bg-img/119.jpg" },
];

export default function TeamArea() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="team-section">
      <div className="divider"></div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {members.map((member) => (
            <div key={member.id} className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
              <div className="team-card-three">
                {/* Team Image */}
                <div className="team-img">
                  <img src={member.img} alt={member.name} />

                  {/* Trigger */}
                  <button
                    className={`social-nav-trigger ${activeId === member.id ? "active" : ""}`}
                    onClick={() => handleToggle(member.id)}
                  >
                    <i className="ti ti-plus"></i>
                    <i className="ti ti-minus"></i>
                  </button>

                  {/* Social Nav */}
                  <div className="social-nav social-nav-three">
                    {["linkedin", "x", "instagram"].map((platform, index) => (
                      <a
                        key={platform}
                        href="#"
                        className={`${
                          activeId === member.id ? "show" : ""
                        }`}
                        style={{
                          transition: "all 0.3s ease",
                          transitionDelay:
                            activeId === member.id ? `${index * 0.2}s` : "0s",
                        }}
                      >
                        <i className={`ti ti-brand-${platform}`}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Team Body */}
                <div className="team-body">
                  <h5>{member.name}</h5>
                  <p className="mb-0">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
}
