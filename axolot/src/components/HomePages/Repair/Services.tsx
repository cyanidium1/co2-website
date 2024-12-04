"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <section id="services" className="repair-services-area ptb-100 pb-100">
        <div className="container">
          <div className="section-title text-center">
            <h3 style={{ color: "#f06334" }}>Переваги</h3>
            <p>Незалежність у забезпеченні CO2 та навіть більше</p>
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
            <SwiperSlide style={{minHeight:'270px'}}>
              <div className="single-repair-services">
                <Image
                  src="/icons/chem.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3>Якість</h3>
                <p>
                  Рідкий CO2 високої якості ≥ 99,998 % обʼємних часток, O2 ≤ 5
                  ppm обʼємних часток
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{minHeight:'270px'}}>
              <div className="single-repair-services">
                <Image
                  src="/icons/progress.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3>Eфективнiсть відновлення</h3>
                <p>
                  Висока ефективність відновлення навіть при низькій чистоті CO2
                  на вході з ≥ 95% обʼємних часток.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{minHeight:'270px'}}>
              <div className="single-repair-services">
                <Image
                  src="/icons/manufacturing.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3>Надійність</h3>
                <p>
                  Міцна конструкція для надійної роботи 24/7, час безвідмовної роботи ≥ 95%
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{minHeight:'270px'}}>
              <div className="single-repair-services">
                <Image
                  src="/icons/extension.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3>Гнучкість</h3>
                <p>
                 Гнучка, модульна конструкція для задоволення потреб у плануванні обʼєкта.
                </p>
              </div>
            </SwiperSlide>

             <SwiperSlide style={{minHeight:'270px'}}>
              <div className="single-repair-services">
                <Image
                  src="/icons/eco.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3>Природні хладагенти</h3>
                <p>
                Застосування природних хладагентів CO2 (R744) та NH3 (R717).
                </p>
              </div>
            </SwiperSlide>

             <SwiperSlide style={{minHeight:'270px'}}>
              <div className="single-repair-services">
                <Image
                  src="/icons/light.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3>Економія з LiquiVap</h3>
                <p>
                 Швидке відновлення та економія енергії до 60 % з LiquiVap (опційно).
                </p>
              </div>
            </SwiperSlide>

             <SwiperSlide style={{minHeight:'270px'}}>
              <div className="single-repair-services">
                <Image
                  src="/icons/book.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3>Підтримка</h3>
                <p>
                Доступ до експертних знань про CO2 та технічної підтримки.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
