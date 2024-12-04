"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="repair-footer-area">
        <section className="repair-subscribe-area">
          <div className="container">
            <div className="repair-subscribe-content">
              <h2>Subscribe to our newsletter</h2>
              <form className="newsletter-form">
                <div className="form-group">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Email Address*"
                    name="EMAIL"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit <i className="icofont-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    Axo<span>lot</span>
                  </Link>
                </div>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan.
                </p>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Services</h3>
                <ul className="services-list">
                  <li>
                    <Link href="#">Reproduction</Link>
                  </li>
                  <li>
                    <Link href="#">Agistment</Link>
                  </li>
                  <li>
                    <Link href="#">Hay For Sale</Link>
                  </li>
                  <li>
                    <Link href="#">Foaling Down</Link>
                  </li>
                  <li>
                    <Link href="#">Semen Freezing</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Contacts</h3>
                <ul className="contact-list">
                  <li>
                    <span>Address:</span> 27 Division St, New York, NY 10002,
                    USA
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:axolot@gmail.com">axolot@gmail.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:+0321984754">+0 (321) 984 754</a>
                  </li>
                  <li>
                    <span>Fax:</span>{" "}
                    <a href="tel:+0321984755">+0 (321) 984 755</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Working Hours</h3>
                <ul className="working-hours">
                  <li>
                    <span>Monday:</span> 8AM - 6PM
                  </li>
                  <li>
                    <span>Tuesday:</span> 8AM - 6PM
                  </li>
                  <li>
                    <span>Wednesday:</span> 8AM - 6PM
                  </li>
                  <li>
                    <span>Thursday - Friday:</span> 8AM - 6PM
                  </li>
                  <li>
                    <span>Sunday:</span> Closed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="repair-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
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
              <div className="col-lg-6 col-md-6 text-end">
                <ul>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="map-box">
          <Image
            src="/img/footer-map.png"
            alt="image"
            width={1027}
            height={499}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
