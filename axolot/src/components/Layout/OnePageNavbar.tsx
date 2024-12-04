"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const OnePageNavbar: React.FC = () => {
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
            Axo<span>lot</span>
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
                <Link href="#home" className="nav-link" onClick={toggleNavbar}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="#features"
                  className="nav-link"
                  onClick={toggleNavbar}
                >
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#about" className="nav-link" onClick={toggleNavbar}>
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="#services"
                  className="nav-link"
                  onClick={toggleNavbar}
                >
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#team" className="nav-link" onClick={toggleNavbar}>
                  Team
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#faq" className="nav-link" onClick={toggleNavbar}>
                  Faq
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="#pricing"
                  className="nav-link"
                  onClick={toggleNavbar}
                >
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/contact" className="nav-link">
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

export default OnePageNavbar;
