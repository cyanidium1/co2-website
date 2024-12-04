"use client";
  
import React from "react";
import Link from "next/link";

const Pricing: React.FC = () => {
  return (
    <>
      <section id="pricing" className="pricing-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Pricing</span>
            <h3>Our Packages</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="pricingTable">
                <h3 className="title">Basic Plan</h3>
                <div className="price-value">
                  $29.00<span className="month">/month</span>
                </div>
                <ul className="pricing-content">
                  <li>Unlimited Reservations</li>
                  <li>6 Clients and Products</li>
                  <li>Housekeeping Status</li>
                  <li>Invoicing and Payments</li>
                  <li>Data Security and Backups</li>
                </ul>

                <Link href="#" className="btn btn-primary">
                  Select Plan
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="pricingTable">
                <h3 className="title">Advanced Plan</h3>
                <div className="price-value">
                  $49.00<span className="month">/month</span>
                </div>
                <ul className="pricing-content">
                  <li>Unlimited Reservations</li>
                  <li>6 Clients and Products</li>
                  <li>Housekeeping Status</li>
                  <li>Invoicing and Payments</li>
                  <li>Data Security and Backups</li>
                </ul>

                <Link href="#" className="btn btn-primary">
                  Select Plan
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="pricingTable">
                <h3 className="title">Expert Plan</h3>
                <div className="price-value">
                  $69.00<span className="month">/month</span>
                </div>
                <ul className="pricing-content">
                  <li>Unlimited Reservations</li>
                  <li>6 Clients and Products</li>
                  <li>Housekeeping Status</li>
                  <li>Invoicing and Payments</li>
                  <li>Data Security and Backups</li>
                </ul>
                
                <Link href="#" className="btn btn-primary">
                  Select Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
