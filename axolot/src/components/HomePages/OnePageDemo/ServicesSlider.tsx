"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const ServicesSlider: React.FC = () => {
  return (
    <>
      <section id="services" className="services-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h3>We provide best service for you customers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            navigation={true}
            spaceBetween={30}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper services-slides"
          >
            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-ruler-pencil"></i>
                <h3>Software Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-laptop-alt"></i>
                <h3>Web Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-brand-designfloat"></i>
                <h3>Graphic Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-ssl-security"></i>
                <h3>Web Secuirity</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-globe-alt"></i>
                <h3>Online Marketing</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-letterbox"></i>
                <h3>Branding Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="icofont-support"></i>
                <h3>Helping Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ServicesSlider;
