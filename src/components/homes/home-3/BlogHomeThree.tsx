"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function BlogHomeThree() {
  const [openCard, setOpenCard] = useState<number | null>(0);  

  const blogData = [
    {
      authorImg: "/assets/img/bg-img/17.jpg",
      authorName: "Benjamin Carter",
      title: "Planning your Online Business Goals With a Specialist",
      img: "/assets/img/bg-img/16.jpg",
      location: "New York City",
      date: "December 02, 2025",
    },
    {
      authorImg: "/assets/img/bg-img/18.jpg",
      authorName: "Elena Gordon",
      title: "Including Animation In Your Design System",
      img: "/assets/img/bg-img/16.jpg",
      location: "New York City",
      date: "December 02, 2025",
    },
  ];

  const handleToggle = (index: number) => { 
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="blog-section">
      <div className="divider"></div>

      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-sm-6 col-md-8 col-lg-6">
            <div className="section-heading">
              <span className="subtitle">Our Blogs</span>
              <h2 className="mb-0">Recent Blog &amp; Articles About Technology</h2>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-6">
            <div className="text-sm-end">
              <Link href="/blog" className="btn btn-primary">
                <span>View All Posts <i className="ti ti-arrow-up-right"></i></span>
                <span>View All Posts <i className="ti ti-arrow-up-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
        <div className="blog-card-wrapper">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className={`blog-card-three ${openCard === index ? "open" : ""}`}
              onClick={() => handleToggle(index)}
            >
              <div className="blog-img blog-hidden-content">
                <Image src={blog.img} alt="" width={1000} height={1000} priority />
                <Link href="/blog-details" className="btn btn-primary">
                  <span>Read more <i className="d-none d-md-inline-block ti ti-arrow-up-right"></i></span>
                  <span>Read more <i className="d-none d-md-inline-block ti ti-arrow-up-right"></i></span>
                </Link>
              </div>

              <div className="blog-body">
                <div className="post-author">
                  <Image src={blog.authorImg} alt="" width={1000} height={1000} priority />
                  <div>
                    <h5 className="mb-1">{blog.authorName}</h5>
                    <p className="mb-0">Posted By</p>
                  </div>
                </div>

                <div>
                  <Link href="/blog-details" className="post-title mb-4">{blog.title}</Link>
                  <div className="blog-meta">
                    <a href="#" className="post-comments">
                      <i className="ti ti-message"></i> 0 Comments
                    </a>
                    <a className="post-location" href="#">
                      <i className="ti ti-map-pin"></i> {blog.location}
                    </a>
                  </div>
                </div>

                <div className="post-location">
                  <a href="#"><span><i className="ti ti-calendar-week"></i></span> {blog.date}</a>
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
