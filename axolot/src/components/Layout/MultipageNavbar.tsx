"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MultipageNavbar: React.FC = () => {
  const pathname = usePathname();

  const [menu, setMenu] = useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <nav
        id="navbar"
        className="navbar navbar-expand-md navbar-light bg-light fixed-top"
      >
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image src="/logo.svg" alt="logo" width={200} height={90} />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
  
              <li className="nav-item">
                <Link
                  href="#about"
                  className={`nav-link ${pathname == "/about/" && "active"}`}
                >
                  Про товар
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="#benefits"
                  className={`nav-link ${pathname == "/benefits/" && "active"}`}
                >
                  Переваги
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="#description"
                  className={`nav-link ${pathname == "/description/" && "active"}`}
                >
                  Опис
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="#related"
                  className={`nav-link ${pathname == "/related/" && "active"}`}
                >
                  Супутні товари
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="#news"
                  className={`nav-link ${pathname == "/news/" && "active"}`}
                >
                  Новини
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact/"
                  className={`nav-link ${pathname == "/contact/" && "active"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MultipageNavbar;
