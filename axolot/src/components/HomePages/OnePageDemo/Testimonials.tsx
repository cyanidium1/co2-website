"use client";
  
import React from "react";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="testimonials-area bg-gray ptb-100">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h3>What Our Users Say</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
            >
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img">
                    <Image
                      src="/img/client-avatar1.jpg"
                      alt="client"
                      width={85}
                      height={85}
                    />
                  </div>
                  <div className="client-title">
                    <h4>John Smith</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img">
                    <Image
                      src="/img/client-avatar2.jpg"
                      alt="client"
                      width={85}
                      height={85}
                    />
                  </div>
                  <div className="client-title">
                    <h4>John Doe</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
            >
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img">
                    <Image
                      src="/img/client-avatar3.jpg"
                      alt="client"
                      width={85}
                      height={85}
                    />
                  </div>
                  <div className="client-title">
                    <h4>Steven Smith</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img">
                    <Image
                      src="/img/client-avatar3.jpg"
                      alt="client"
                      width={85}
                      height={85}
                    />
                  </div>
                  <div className="client-title">
                    <h4>Steven</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="800"
            >
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img">
                    <Image
                      src="/img/client-avatar1.jpg"
                      alt="client"
                      width={85}
                      height={85}
                    />
                  </div>
                  <div className="client-title">
                    <h4>Walker</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
            >
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img">
                    <Image
                      src="/img/client-avatar2.jpg"
                      alt="client"
                      width={85}
                      height={85}
                    />
                  </div>
                  <div className="client-title">
                    <h4>David Warner</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
