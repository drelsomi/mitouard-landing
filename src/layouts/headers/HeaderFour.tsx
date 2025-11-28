"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import { useState } from "react";
import SidebarArea from "@/common/SidebarArea";
import UseSticky from "@/hooks/UseSticky";
import Image from "next/image";

export default function HeaderFour() {
  const { sticky } = UseSticky();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`header-section style-four ${isOpen ? "mobile-menu-open" : ""} ${sticky ? "sticky-on" : ""}`}>
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-xl">
          {/* <!-- Navbar Brand --> */}
          <Link className="navbar-brand" href="/home-4">
            <Image className="w-auto h-auto" src="/assets/img/core-img/logo-light.png" alt="" width={1920} height={1080} priority/>
          </Link>

          {/* <!-- Navbar Toggler --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#startixNav"
            aria-controls="startixNav" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={toggleMenu}>
            <i className="ti ti-menu-deep"></i>
          </button>

          {/* <!-- Navbar Nav --> */}
          <div className="collapse justify-content-xl-end navbar-collapse" id="startixNav">

            <Navmenu />

            {/* <!-- Header Navigation --> */}
            <div className="header-navigation ps-0 ps-xl-5 style-two mt-4 mt-xl-0">
              {/* <!-- Offcanvas Button --> */}
              <a className="offcanvas-btn" data-bs-toggle="offcanvas" href="#sideMenuOffcanvas" role="button"
                aria-controls="sideMenuOffcanvas">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 6.40078C8 5.51716 8.71638 4.80078 9.6 4.80078H30.4C31.2836 4.80078 32 5.51716 32 6.40078C32 7.28441 31.2836 8.00078 30.4 8.00078H9.6C8.71638 8.00078 8 7.28434 8 6.40078ZM30.4 14.4008H1.6C0.716375 14.4008 0 15.1172 0 16.0008C0 16.8844 0.716375 17.6008 1.6 17.6008H30.4C31.2836 17.6008 32 16.8844 32 16.0008C32 15.1172 31.2836 14.4008 30.4 14.4008ZM30.4 24.0008H16C15.1164 24.0008 14.4 24.7172 14.4 25.6008C14.4 26.4843 15.1164 27.2008 16 27.2008H30.4C31.2836 27.2008 32 26.4843 32 25.6008C32 24.7172 31.2836 24.0008 30.4 24.0008Z"
                    fill="white" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <SidebarArea />
    </>
  )
}
