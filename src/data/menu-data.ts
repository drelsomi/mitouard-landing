interface InnerSubMenu {
  title: string;
  link: string;
}

interface SubMenu {
  title: string;
  link: string;
  has_inner_dropdown: boolean;
  submenu?: InnerSubMenu[];
}

interface MenuDataType {
  title: string;
  link: string;
  has_dropdown: boolean;
  submenu?: SubMenu[];
}

const menu_data: MenuDataType[] = [
  {
    title: "Home",
    link: "#",
    has_dropdown: true,
    submenu: [
      { title: "SaaS Landing", link: "/home-1", has_inner_dropdown: false, },
      { title: "App Landing", link: "/home-2", has_inner_dropdown: false, },
      { title: "Startup Landing", link: "/home-3", has_inner_dropdown: false, },
      { title: "AI Landing", link: "/home-4", has_inner_dropdown: false, },
      { title: "Software Landing", link: "/home-5", has_inner_dropdown: false, },
    ],
  },
  {
    title: "About Us",
    link: "/about-us",
    has_dropdown: false,
  },
  {
    title: "Pages",
    link: "#",
    has_dropdown: true,
    submenu: [
      {
        title: "About Us",
        link: "/about-us",
        has_inner_dropdown: false,
      },
      {
        title: "Services",
        link: "#",
        has_inner_dropdown: true,
        submenu: [
          { title: "Services", link: "/services" },
          { title: "Services Details", link: "/service-details" },
        ],
      },
      {
        title: "Projects",
        link: "#",
        has_inner_dropdown: true,
        submenu: [
          { title: "Projects", link: "/projects" },
          { title: "Project Details", link: "/project-details" },
        ],
      },
      {
        title: "Team",
        link: "#",
        has_inner_dropdown: true,
        submenu: [
          { title: "Team", link: "/team" },
          { title: "Team Details", link: "/team-details" },
        ],
      },
      { title: "FAQs", link: "/faq", has_inner_dropdown: false },
      { title: "Pricing", link: "/pricing", has_inner_dropdown: false },
      { title: "404", link: "/erroe-404", has_inner_dropdown: false },
    ],
  },
  {
    title: "Blog",
    link: "#",
    has_dropdown: true,
    submenu: [
      { title: "Blog Standard", link: "/blog", has_inner_dropdown: false, },
      { title: "Blog Grid", link: "/blog-grid", has_inner_dropdown: false, },
      { title: "Blog Details", link: "/blog-details", has_inner_dropdown: false, },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

export default menu_data; 