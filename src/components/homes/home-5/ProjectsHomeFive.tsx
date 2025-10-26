"use client";
import Link from "next/link";
import React, { useState } from "react";

interface ProjectItem {
  id: number;
  category: string;
  title: string;
  image: string;
  delay: number;
}

const projects: ProjectItem[] = [
  { id: 1, category: "Design", title: "Landing Page Design", image: "/assets/img/bg-img/74.jpg", delay: 0.5 },
  { id: 2, category: "App", title: "Landing Page Design", image: "/assets/img/bg-img/75.jpg", delay: 0.6 },
  { id: 3, category: "Branding", title: "Landing Page Design", image: "/assets/img/bg-img/76.jpg", delay: 0.7 },
  { id: 4, category: "Development", title: "Landing Page Design", image: "/assets/img/bg-img/77.jpg", delay: 0.8 },
  { id: 5, category: "Design", title: "Landing Page Design", image: "/assets/img/bg-img/78.jpg", delay: 0.9 },
  { id: 6, category: "App", title: "Landing Page Design", image: "/assets/img/bg-img/79.jpg", delay: 1.0 },
];

// data
const categories = ["All", ...new Set(projects.map((item) => item.category))];

export default function ProjectsHomeFive() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(projects);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(projects);
    } else {
      const findItems = projects.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

  return (
    <section className="project-section startix-container">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Portfolio</span>
              <h2 className="mb-0">Let's Check Latest Work from here</h2>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      {/* <!-- Filter Nav --> */}
      <div className="container">
        <div className="text-center">
          <div className="startix-filter-nav fadeInUp" data-delay="0.5">
            {categories.map((cate, i) => (
              <React.Fragment key={i}>
                <button
                  onClick={() => filterItems(cate)}
                  className={`${cate === activeCategory ? "active" : ""}`}
                >
                  {cate}
                </button>  {' '}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-4 startix-filter">
          {items.map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4 filter-item design">
              <div className="project-card-three fadeInUp" data-delay={item.delay}>
                <Link href="/project-details" target="_blank">
                  <img src={item.image} alt="" />
                  <div className="project-info">
                    <p className="mb-2">{item.category}</p>
                    <h4 className="mb-0">{item.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
