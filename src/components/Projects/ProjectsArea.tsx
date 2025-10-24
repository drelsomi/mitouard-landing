"use client";

import project_data from "@/data/projects-data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";


export default function ProjectsArea() {
  return (
    <div className="project-section project-masonary">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        <ResponsiveMasonry
          className="startix-filter"
          columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 2 }}
        >
          <Masonry gutter="40px">
            {project_data.map((item, i) => (
              <div key={i} className="filter-item translateY10">
                <div className="project-card fadeInUp" data-delay={item.delay}>
                  <img src={item.image} alt={item.title} style={{ width: "613px", marginTop: i < 2 ? "0px" : "50px",  }} />
                  {/* <!-- Project Info --> */}
                  <div className="project-info">
                    <p className="mb-2">{item.categories}</p>
                    <h2 className="mb-0">{item.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      {/* <!-- Button --> */}
      <div className="text-center">
        <a href="#" className="btn btn-primary">
          <span>View More Projects <i className="ti ti-arrow-up-right"></i></span>
          <span>View More Projects <i className="ti ti-arrow-up-right"></i></span>
        </a>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div >
  )
}
