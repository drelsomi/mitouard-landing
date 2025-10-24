 
interface ProjectType {
  id: number;
  image: string;
  categories: string;
  title: string;
  delay: string;
  left?: string;
  top?: string;
}

const project_data: ProjectType[] = [
  {
    id: 1,
    image: "/assets/img/bg-img/55.jpg",
    categories: "Branding / Development / Marketing",
    title: "Haliya Mono",
    delay: "0.5",
    left: '0',
    top: '0',
  },
  {
    id: 2,
    image: "/assets/img/bg-img/56.jpg",
    categories: "Branding - 2025",
    title: "Atlas Chatart",
    delay: "0.6",
    left: '50',
    top: '0',
  },
  {
    id: 3,
    image: "/assets/img/bg-img/57.jpg",
    categories: "Branding - 2025",
    title: "Kutober Jake",
    delay: "0.5",
     left: '50',
    top: '608.373',
  },
  {
    id: 4,
    image: "/assets/img/bg-img/58.jpg",
    categories: "Branding - 2025",
    title: "Flat Illustration",
    delay: "0.6", 
     left: '0',
    top: '1002.72',
  },
  {
    id: 5,
    image: "/assets/img/bg-img/108.jpg",
    categories: "Branding - 2025",
    title: "Haliya Mono",
    delay: "0.5", 
     left: '50',
    top: '1401.4',
  },
  {
    id: 6,
    image: "/assets/img/bg-img/107.jpg",
    categories: "Branding - 2025",
    title: "Interactive Design",
    delay: "0.6", 
     left: '0',
    top: '1611.09',
  },
];

export default project_data;
