"use client";
  
import React from "react"; 

const ServicesCard: React.FC = () => {
  return (
    <>
      <section id="services" className="services-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-services text-center">
                <i className="icofont-ruler-pencil"></i>
                <h3>Software Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services text-center">
                <i className="icofont-laptop-alt"></i>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services text-center">
                <i className="icofont-brand-designfloat"></i>
                <h3>Graphic Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services text-center">
                <i className="icofont-ssl-security"></i>
                <h3>Web Secuirity</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services text-center">
                <i className="icofont-globe-alt"></i>
                <h3>Online Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-services text-center">
                <i className="icofont-letterbox"></i>
                <h3>Branding Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
