import { useEffect, useState } from "react";
import project_data from "@/data/projects-data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

export default function ProjectsArea() {
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
          className="startix-filter"
          columnsCountBreakPoints={{ 0: 1, 750: 2, 992: 2 }}
        >
          <Masonry gutter="40px">
            {project_data.map((item, i) => (
              <div key={i} className="filter-item translateY10">
                <div className="project-card">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={613}
                    height={613}
                    priority
                    className="h-auto"
                    style={{
                      width: "613px",
                      marginTop: i < 2 ? "0px" : "50px",
                    }}
                  />
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

      <div className="divider-sm"></div>

      <div className="text-center">
        <a href="#" className="btn btn-primary">
          <span>
            View More Projects <i className="ti ti-arrow-up-right"></i>
          </span>
          <span>
            View More Projects <i className="ti ti-arrow-up-right"></i>
          </span>
        </a>
      </div>

      <div className="divider"></div>
    </div>
  );
}