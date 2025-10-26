"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";

export default function HeaderThree() {
   const {sticky} = UseSticky();

   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <header className={`header-section style-three ${isOpen ? "mobile-menu-open" : ""} ${sticky ? "sticky-on" : ""}`}>
         {/* <!-- Navbar --> */}
         <nav className="navbar navbar-expand-xl">
            {/* <!-- Navbar Brand --> */}
            <Link className="navbar-brand" href="#">
               <img className="d-none d-md-block" src="/assets/img/core-img/logo-six.png" alt="" />
               <img className="d-block d-md-none" src="/assets/img/core-img/logo-sm-three.png" alt="" />
            </Link>

            {/* <!-- Navbar Toggler --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#startixNav"
               aria-controls="startixNav" aria-expanded={isOpen} aria-label="Toggle navigation" onClick={toggleMenu}>
               <i className="ti ti-menu-deep"></i>
            </button>

            {/* <!-- Navbar Nav --> */}
            <div className="collapse navbar-collapse justify-content-xl-center" id="startixNav">
               <Navmenu />
            </div>

            {/* <!-- Header Navigation --> */}
            <div className="header-navigation d-flex flex-wrap align-items-center">
               {/* <!-- Login Button --> */}
               <a href="#" className="btn login-btn p-0">Login</a>

               {/* <!-- Button --> */}
               <Link href="/contact" className="btn btn-primary d-none d-sm-inline-flex">
                  <span>Get Started <i className="ti ti-arrow-up-right"></i></span>
                  <span>Get Started <i className="ti ti-arrow-up-right"></i></span>
               </Link>
            </div>
         </nav>
      </header>
   )
}
