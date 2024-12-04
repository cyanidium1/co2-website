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
            <Image src="/logo.jpeg" alt="logo" width={200} height={90} />
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
                  href="#"
                  className="nav-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Home <i className="icofont-thin-down"></i>
                </Link>

                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${pathname == "/" && "active"}`}
                    >
                      Home Demo - 1
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/home-2/"
                      className={`nav-link ${
                        pathname == "/home-2/" && "active"
                      }`}
                    >
                      Home Demo - 2
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/home-3/"
                      className={`nav-link ${
                        pathname == "/home-3/" && "active"
                      }`}
                    >
                      Home Demo - 3
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/home-4/"
                      className={`nav-link ${
                        pathname == "/home-4/" && "active"
                      }`}
                    >
                      Home Demo - 4
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/home-5/"
                      className={`nav-link ${
                        pathname == "/home-5/" && "active"
                      }`}
                    >
                      Home Demo - 5
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/home-6/"
                      className={`nav-link ${
                        pathname == "/home-6/" && "active"
                      }`}
                    >
                      Home Demo - 6
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/home-7/"
                      className={`nav-link ${
                        pathname == "/home-7/" && "active"
                      }`}
                    >
                      Home Demo - 7
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/home-8/"
                      className={`nav-link ${
                        pathname == "/home-8/" && "active"
                      }`}
                    >
                      One Page Template
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  href="/about/"
                  className={`nav-link ${pathname == "/about/" && "active"}`}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/services/"
                  className={`nav-link ${pathname == "/services/" && "active"}`}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/team/"
                  className={`nav-link ${pathname == "/team/" && "active"}`}
                >
                  Team
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/faq/"
                  className={`nav-link ${pathname == "/faq/" && "active"}`}
                >
                  Faq
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/pricing/"
                  className={`nav-link ${pathname == "/pricing/" && "active"}`}
                >
                  Pricing
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
