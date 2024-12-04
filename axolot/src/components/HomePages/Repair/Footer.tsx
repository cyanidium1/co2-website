"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="repair-footer-area" style={{ paddingBottom: 40 }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/logo-footer.svg"
                      alt="logo"
                      width={200}
                      height={90}
                    />
                  </Link>
                </div>
                <p style={{maxWidth:"80%"}}>
                  <strong>Наша місія:</strong> Завдяки нашому досвіду у процесах та інноваціям ми
                  надаємо інженерні рішення та послуги, які сприяють
                  конкурентоспроможності наших клієнтів та зменшують екологічний
                  вплив.
                </p>
                <ul className="social-links">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="icofont-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-12">
              <div className="single-footer-widget">
                <h3>Contacts</h3>
                <ul className="contact-list">
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:axolot@gmail.com">axolot@gmail.com</a>
                  </li>
                  <li>
                    <span>Телефон:</span>{" "}
                    <a href="tel:+380996698291"> +38 (099) 669 82 91</a>
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
