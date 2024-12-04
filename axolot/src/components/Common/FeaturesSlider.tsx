"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const FeaturesSlider: React.FC = () => {
  return (
    <>
      <section id="features" className="features-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Features</span>
            <h3>Our Amazing Features</h3>
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
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper features-slides"
          >
            <SwiperSlide>
              <div className="single-features">
                <i className="icofont-hand-drag1"></i>
                <h3>Drag and drop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-features">
                <i className="icofont-diamond"></i>
                <h3>Fully customizable</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-features">
                <i className="icofont-responsive"></i>
                <h3>Fully responsive</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-features">
                <i className="icofont-rocket"></i>
                <h3>App integration</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-features">
                <i className="icofont-email"></i>
                <h3>Email integration</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturesSlider;
