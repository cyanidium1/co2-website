"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const TestimonialsSlider2: React.FC = () => {
  return (
    <>
      <section id="team" className="testimonials-area ptb-100">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>

        <div className="container">
          <div className="section-title">
            <span>TESTIMONIALS</span>
            <h3>What Our Users Say</h3>
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
            className="mySwiper testimonials-slides"
          >
            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>

            <SwiperSlide>
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
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSlider2;
