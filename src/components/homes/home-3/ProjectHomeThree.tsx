"use client";

import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState, useEffect } from "react";

interface Project {
  id: number;
  img: string;
  category: string;
  title: string;
  description: string;
  delay: number;
}

const projects: Project[] = [
  {
    id: 1,
    img: "/assets/img/bg-img/55.jpg",
    category: "Branding / Development / Marketing",
    title: "Haliya Mono",
    description: "Branding / Development / Marketing",
    delay: 0.5,
  },
  {
    id: 2,
    img: "/assets/img/bg-img/56.jpg",
    category: "Branding - 2025",
    title: "Atlas Chatart",
    description: "Branding - 2025",
    delay: 0.6,
  },
  {
    id: 3,
    img: "/assets/img/bg-img/57.jpg",
    category: "Branding - 2025",
    title: "Kutober Jake",
    description: "Branding - 2025",
    delay: 0.7,
  },
  {
    id: 4,
    img: "/assets/img/bg-img/58.jpg",
    category: "Branding - 2025",
    title: "Flat Illustration",
    description: "Branding - 2025",
    delay: 0.8,
  },
];

export default function ProjectHomeThree() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="project-section project-masonary">
      <div className="divider"></div>

      <div className="container">
        <ResponsiveMasonry
          className="row blog-masonry-active"
          columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 2 }}
        >
          <Masonry gutter="140px">
            {projects.map((project) => (
              <div
                key={project.id}
                className="filter-item translateY10"
                style={{ animationDelay: `${project.delay}s` }}
              >
                <div className="project-card fadeInUp">
                  <img
                    className={`img-anim-${project.id % 2 === 0 ? "right" : "left"}`}
                    src={project.img}
                    alt={project.title}
                    style={{ width: "613px", marginTop: "50px" }}
                  />
                  <div className="project-info">
                    <p className="mb-2">{project.category}</p>
                    <h2 className="mb-0">{project.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <div className="filter-item translateY10" style={{ marginTop: "-150px" }}>
          <div className="d-flex align-items-center justify-content-end fadeInUp" data-delay="0.9">
            <Link href="/projects" className="btn-project">View all</Link>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
}