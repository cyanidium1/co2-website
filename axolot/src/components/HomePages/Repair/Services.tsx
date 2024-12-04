"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <>
      <section id="services" className="repair-services-area ptb-100 pb-0">
        <div className="container">
          <div className="section-title text-center">
            <span>Our Services</span>
            <h3>What we offer for you</h3>
            <p>
              We enjoy adapting our strategies to offer every client the best
              solutions that are at the forefront of the industry.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper repair-services-slides"
          >
            <SwiperSlide>
              <div className="single-repair-services">
                <i className="icofont-laptop-alt"></i>
                <h3>Laptop Repair</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="#" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-services">
                <i className="icofont-computer"></i>
                <h3>Computer Repair</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="#" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-services">
                <i className="icofont-responsive"></i>
                <h3>Apple Products Repair</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="#" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-services">
                <i className="icofont-ui-touch-phone"></i>
                <h3>Mobile Repair</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="#" className="read-more-btn">
                  Read More
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="repair-services-inner">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-inner-services">
                  <i className="icofont-handshake-deal"></i>
                  <h3>Quick Repair Process</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-inner-services">
                  <i className="icofont-wrench"></i>
                  <h3>Free Diagnostics</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="single-inner-services">
                  <i className="icofont-fast-delivery"></i>
                  <h3>Fast Delivery</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
