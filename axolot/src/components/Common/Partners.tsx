"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const Partners: React.FC = () => {
  return (
    <>
      <div className="partner-area ptb-100">
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
            className="mySwiper partner-slides"
          >
            <SwiperSlide className="text-center">
              <Image
                src="/img/partner-1.jpg"
                alt="partner"
                width={200}
                height={70}
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src="/img/partner-2.jpg"
                alt="partner"
                width={200}
                height={70}
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src="/img/partner-3.jpg"
                alt="partner"
                width={200}
                height={70}
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src="/img/partner-4.jpg"
                alt="partner"
                width={200}
                height={70}
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src="/img/partner-5.jpg"
                alt="partner"
                width={200}
                height={70}
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src="/img/partner-6.jpg"
                alt="partner"
                width={200}
                height={70}
              />
            </SwiperSlide>

            <SwiperSlide className="text-center">
              <Image
                src="/img/partner-3.jpg"
                alt="partner"
                width={200}
                height={70}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partners;
