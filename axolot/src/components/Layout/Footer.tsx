"use client";
  
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h4 className="logo">
                  <Link href="/">
                    Axo<span>lot</span>
                  </Link>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut. sed do eiusmod tempor
                  incididunt ut, tempor incididunt ut.
                </p>
                <Link href="/about" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <Link href="/">
                      <i className="icofont-double-right"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <i className="icofont-double-right"></i> About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <i className="icofont-double-right"></i> Services
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" target="_blank">
                      <i className="icofont-double-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Support</h3>
                <ul>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Career
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="icofont-double-right"></i> Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Resource
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icofont-double-right"></i> Strategy
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <i className="icofont-double-right"></i> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="icofont-double-right"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Contact Info</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="contact-info">
                  <li>
                    <i className="icofont-google-map"></i> 2750 Quadra Street ,
                    Park Area, Victoria, Canada.
                  </li>
                  <li>
                    <i className="icofont-phone"></i> +(00) 01245687
                  </li>
                  <li>
                    <i className="icofont-envelope"></i> support@axolot.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <p>
                  © Axolot is Proudly Owned by{" "}
                  <a
                    href="https://envytheme.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EnvyTheme
                  </a>
                </p>
              </div>

              <div className="col-lg-5 col-md-5">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="icofont-facebook"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="icofont-twitter"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="icofont-instagram"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="icofont-linkedin"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.vimeo.com/"
                      className="icofont-vimeo"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
