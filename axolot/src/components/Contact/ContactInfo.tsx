"use client";

import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <>
      <div
        id="contact"
        className="row container ptb-100"
        style={{ margin: "0 auto" }}
      >
        <div
          className="section-title"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h3>Контакти</h3>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="contact-box mb-5">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content">
              <h4>Телефон</h4>
              <p>
                <a
                  href="tel:+380996698291
"
                >
                  +38 (099) 669 82 91
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="contact-box mb-5">
            <div className="icon">
              <i className="icofont-envelope"></i>
            </div>

            <div className="content">
              <h4>E-mail</h4>
              <p>
                <a href="mailto:info@axolot.com">info@Axolot.com </a>
              </p>
              <p>
                <a href="mailto:support@axolot.com">support@Axolot.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
