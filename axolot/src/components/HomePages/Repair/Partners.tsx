"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="repair-partner-area">
        <div className="container">
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
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper repair-partner-slider"
          >
            <SwiperSlide className="text-center">
              <div className="single-repain-client">
                <Image
                  src="/img/partner1.png"
                  alt="image"
                  width={134}
                  height={97}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <div className="single-repain-client">
                <Image
                  src="/img/partner2.png"
                  alt="image"
                  width={63}
                  height={96}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <div className="single-repain-client">
                <Image
                  src="/img/partner3.png"
                  alt="image"
                  width={86}
                  height={96}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <div className="single-repain-client">
                <Image
                  src="/img/partner4.png"
                  alt="image"
                  width={52}
                  height={57}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <div className="single-repain-client">
                <Image
                  src="/img/partner5.png"
                  alt="image"
                  width={109}
                  height={96}
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <div className="single-repain-client">
                <Image
                  src="/img/partner6.png"
                  alt="image"
                  width={98}
                  height={98}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
