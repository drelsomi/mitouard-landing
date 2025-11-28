export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  shapeImg: string;
}

const service_data: ServiceItem[] = [
  {
    id: 1,
    title: "Advanced Software",
    description:
      "Build powerful applications with modern technologies that scale effortlessly for businesses of all sizes.",
    icon: "flaticon-coding",
    shapeImg: "/assets/img/core-img/shape7.png",
  },
  {
    id: 2,
    title: "Collaborate Securely",
    description:
      "Enable seamless teamwork with secure tools and real-time collaboration features that keep data protected.",
    icon: "flaticon-trust",
    shapeImg: "/assets/img/core-img/shape7.png",
  },
  {
    id: 3,
    title: "Analyze Your Data",
    description:
      "Turn raw data into actionable insights with smart analytics and visualization tools to drive business decisions.",
    icon: "flaticon-analysis",
    shapeImg: "/assets/img/core-img/shape7.png",
  },
  {
    id: 4,
    title: "Cloud Integration",
    description:
      "Connect your apps and services to the cloud for seamless workflow automation and better efficiency.",
    icon: "flaticon-coding",
    shapeImg: "/assets/img/core-img/shape7.png",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Boost your brand's online presence with targeted marketing strategies and data-driven campaigns.",
    icon: "flaticon-trust",
    shapeImg: "/assets/img/core-img/shape7.png",
  },
  {
    id: 6,
    title: "IT Consulting",
    description:
      "Get expert guidance to optimize your IT infrastructure, reduce costs, and implement best practices.",
    icon: "flaticon-analysis",
    shapeImg: "/assets/img/core-img/shape7.png",
  },
];

export default service_data;