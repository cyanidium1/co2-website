"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="feedback-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h3>What customer say about us</h3>
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
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper repair-feedback-slides"
          >
            <SwiperSlide>
              <div className="single-repair-feedback">
                <div className="client-info">
                  <Image
                    src="/img/client-avatar1.jpg"
                    alt="image"
                    width={85}
                    height={85}
                  />
                  <h3>Michel Jonson</h3>
                  <span>CEO at Renovation PVT. Ltd.</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <ul>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                </ul>
                <i className="icofont-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-feedback">
                <div className="client-info">
                  <Image
                    src="/img/client-avatar2.jpg"
                    alt="image"
                    width={85}
                    height={85}
                  />
                  <h3>Michel Jonson</h3>
                  <span>CEO at Renovation PVT. Ltd.</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <ul>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                </ul>
                <i className="icofont-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-repair-feedback">
                <div className="client-info">
                  <Image
                    src="/img/client-avatar3.jpg"
                    alt="image"
                    width={85}
                    height={85}
                  />
                  <h3>Michel Jonson</h3>
                  <span>CEO at Renovation PVT. Ltd.</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <ul>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                  <li>
                    <i className="icofont-star"></i>
                  </li>
                </ul>
                <i className="icofont-quote-left"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="map-box">
          <Image src="/img/map.png" alt="image" width={980} height={478} />
        </div>
      </section>
    </>
  );
};

export default Testimonials;
