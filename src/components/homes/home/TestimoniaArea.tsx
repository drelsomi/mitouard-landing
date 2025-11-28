"use client";

import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Testimonial {
  id: number;
  rating: number;
  category: string;
  title: string;
  description: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    category: "Design Quality",
    title: "Design Quality",
    description:
      "Excquisite Pixel Perfect design, with an abundance of content, well documented, an actual NFT if I ever saw one. Can't wait to see what you put out next. Massive Thanks!",
    author: "webpixie",
  },
  {
    id: 2,
    rating: 5,
    category: "Other",
    title: "Other",
    description:
      "After trying the product, I recommend buying it because it is one of the best projects I have purchased, and one of the best products on the platform, modern colors, professional user interface programming, it deserves more than five stars.",
    author: "iliasseMezzat",
  },
  {
    id: 3,
    rating: 5,
    category: "Documentation",
    title: "Documentation",
    description: "All Complete, great craft I recommend buying it because.",
    author: "Mazatlumm",
  },
  {
    id: 4,
    rating: 5,
    category: "Customer Support",
    title: "Customer Support",
    description:
      "The template will save me many hours of work. The code looks clean, and the designs are excellent. Great support from the team too. I recommend.",
    author: "mrrickez",
  },
  {
    id: 5,
    rating: 5,
    category: "Code Quality",
    title: "Code Quality",
    description:
      "It's a good template and works fine. I had a good strong support to my questions so thanks for their kindly helps and supports. I recommend people to buy this and use on own project. Thanks!",
    author: "yusufonureren",
  },
  {
    id: 6,
    rating: 5,
    category: "Feature Availability",
    title: "Feature Availability",
    description: "Excellent features and code and design I recommend buying it because.",
    author: "muendra_2004",
  },
  {
    id: 7,
    rating: 5,
    category: "Customizability",
    title: "Customizability",
    description: "The coding is simple and easy to customize. and the design quality I like very much",
    author: "dblossoms",
  },
  {
    id: 8,
    rating: 5,
    category: "Customizability",
    title: "Customizability",
    description:
      "The template looks pretty good, and the design quality I like very much. So I thought I appreciate you for these.",
    author: "schenr",
  },
    {
    id: 9,
    rating: 5,
    category: "Code Quality",
    title: "Code Quality",
    description: "Excellent features and code and design I recommend buying it because.",
    author: "muendra_2004",
  },
];

export default function TestimoniaAreaMasonry() {
  const [mounted, setMounted] = useState(false); 
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="client-testimonial bg-secondary bg-img"
      style={{ backgroundImage: 'url("/assets/img/core-img/shape2.png")' }}
    >
      <div className="divider"></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <span className="subtitle">Client Testimonial</span>
              <h2 className="mb-0">What Our Client Say</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      <div className="container">
        {mounted && (
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 576: 2, 992: 3 }}>
            <Masonry gutter="130px">
              {testimonials.map((t) => (
                <div key={t.id} className="filter-item client-testimonial-card" style={{ margin: "10px" }}>
                  <div className="ratings mb-2">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="ti ti-star-filled"></i>
                    ))}
                  </div>
                  <div className="mb-4">
                    for <h2>{t.title}</h2>
                  </div>
                  <p>{t.description}</p>
                  <a href="#">{`by ${t.author}`}</a>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </div>

      <div className="divider"></div>
    </div>
  );
}
