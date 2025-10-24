"use client";
import Link from "next/link";
import Navmenu from "./Navmenu";
import { useState } from "react";
import SearchbarArea from "@/common/SearchbarArea";
import UseSticky from "@/hooks/UseSticky";

export default function HeaderFive() {
  const {sticky} = UseSticky()
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`header-section style-three ${isOpen ? "mobile-menu-open" : ""} ${sticky ? "sticky-on" : ""}`}>
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-xl">
          {/* <!-- Navbar Brand --> */}
          <Link className="navbar-brand" href="/home-5">
            <img className="d-none d-md-block" src="/assets/img/core-img/logo-four.png" alt="" />
            <img className="d-block d-md-none" src="/assets/img/core-img/logo-sm-four.png" alt="" />
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
            {/* <!-- Search Button --> */}
            <div className="header-search-btn" onClick={() => setSearchOpen(!searchOpen)} id="searchButton">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M17.4976 17.4813L13.8791 13.8657M13.8791 13.8657C14.4981 13.2473 14.989 12.5131 15.324 11.705C15.659 10.897 15.8314 10.0309 15.8314 9.15627C15.8314 8.28165 15.659 7.41558 15.324 6.60753C14.9891 5.79948 14.4981 5.06527 13.8791 4.44682C13.2601 3.82836 12.5253 3.33778 11.7166 3.00307C10.9079 2.66836 10.0411 2.49609 9.16572 2.49609C8.29036 2.49609 7.42358 2.66836 6.61486 3.00307C5.80613 3.33778 5.07131 3.82836 4.45234 4.44682C3.20228 5.69584 2.5 7.38988 2.5 9.15627C2.5 10.9227 3.20228 12.6167 4.45234 13.8657C5.70241 15.1148 7.39786 15.8165 9.16572 15.8165C10.9336 15.8165 12.629 15.1148 13.8791 13.8657Z"
                  stroke="#282C32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            {/* <!-- Button --> */}
            <Link href="/contact" className="btn btn-primary d-none d-sm-block">
              <span>Try For Free <i className="ti ti-arrow-up-right"></i></span>
              <span>Try For Free <i className="ti ti-arrow-up-right"></i></span>
            </Link>
          </div>
        </nav>
      </header>
      <SearchbarArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

    </>
  )
}
