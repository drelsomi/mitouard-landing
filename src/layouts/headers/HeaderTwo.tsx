"use client";
import Link from "next/link";
import { useState } from "react";
import SearchbarArea from "@/common/SearchbarArea";
import UseSticky from "@/hooks/UseSticky";
import Image from "next/image";
import type { Route } from "next";

type HeaderTwoProps = {
   ctaLabel?: string;
   ctaHref?: Route;
};

export default function HeaderTwo({ ctaLabel = "Contact", ctaHref = "/contact" }: HeaderTwoProps) {
   const {sticky} = UseSticky();

   const [searchOpen, setSearchOpen] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <>
         <header className={`header-section style-two ${isOpen ? "mobile-menu-open" : ""} ${sticky ? "sticky-on" : ""}`}>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-xl">
               {/* <!-- Navbar Brand --> */}
               <Link className="navbar-brand" href="/home-2">
                  <Image className="d-none d-sm-block w-auto h-auto" src="/assets/img/core-img/logo-five-new.png" alt="" width={1920} height={1080} priority style={{ height: "224px", width: "auto" }}/>
                  <Image className="d-block d-sm-none w-auto h-auto" src="/assets/img/core-img/logo-sm-two-new.png" alt="" width={1920} height={1080} priority style={{ height: "192px", width: "auto" }}/>
               </Link>

               {/* <!-- Navbar Nav removed as requested --> */}

               {/* <!-- Header Navigation --> */}
               <div className="header-navigation d-flex flex-wrap align-items-center ms-auto">
                  {/* <!-- Search Button --> */}
                  <Link className="btn btn-primary" href={ctaHref}>
                     <span>{ctaLabel} <i className="d-none d-sm-block ti ti-arrow-up-right"></i></span>
                     <span>{ctaLabel} <i className="d-none d-sm-block ti ti-arrow-up-right"></i></span>
                  </Link>
               </div>
            </nav>
         </header>
         <SearchbarArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

      </>
   )
}
