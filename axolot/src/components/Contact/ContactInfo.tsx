"use client";
  
import React from "react"; 

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="contact-box mb-5">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content">
              <h4>Phone / Fax</h4>
              <p>
                <a href="tel:+021245522455">(+021) 245522455</a>
              </p>
              <p>
                <a href="tel:+000245522455">(+000) 245522455</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
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

        <div className="col-lg-4 col-md-12">
          <div className="contact-box mb-5">
            <div className="icon">
              <i className="icofont-google-map"></i>
            </div>

            <div className="content">
              <h4>Location</h4>
              <p>
                2750 Quadra Street , Park Area, <span>Victoria, Canada.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
