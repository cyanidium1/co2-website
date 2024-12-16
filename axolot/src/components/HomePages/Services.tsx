"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <section id="benefits" className="repair-services-area ptb-100 pb-100">
        <div className="container">
          <div className="section-title text-center">
            <h3 >Переваги</h3>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            // autoplay={{
            //   delay: 6000,
            //   disableOnInteraction: true,
            //   pauseOnMouseEnter: true,
            // }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper repair-services-slides"
          >
            <SwiperSlide style={{
              minHeight: "270px", backgroundColor: "white",
             }}>
              <div className="single-repair-services">
                <Image
                  src="/icons/manufacturing.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3 style={{color:"#198754"}}>Надійність</h3>
                <p style={{color:"#343536"}}>Перевірені постачальники з усього світу</p>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ minHeight: "270px", backgroundColor: "white", }}>
              <div className="single-repair-services">
                <Image src="/icons/eco.svg" alt="icon" width={40} height={40} />
                <h3 style={{color:"#198754"}}>Сучасні технології</h3>
                <p style={{color:"#343536"}}>
                  Використання обладнання найкращих зразків інженерних практик у
                  галузі
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ minHeight: "270px", backgroundColor: "white", }}>
              <div className="single-repair-services">
                <Image
                  src="/icons/progress.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3 style={{color:"#198754"}}>Eфективнiсть відновлення</h3>
                <p style={{color:"#343536"}}>
                  Висока ефективність відновлення навіть при низькій чистоті CO2
                  на вході з ≥ 95% обʼємних часток.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ minHeight: "270px", backgroundColor: "white", }}>
              <div className="single-repair-services">
                <Image
                  src="/icons/extension.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3 style={{color:"#198754"}}>Індивідуальний підхід</h3>
                <p style={{color:"#343536"}}>Адаптація для задоволення потреб будь якого виробництва</p>
              </div>
            </SwiperSlide>

            <SwiperSlide style={{ minHeight: "270px", backgroundColor: "white", }}>
              <div className="single-repair-services">
                <Image
                  src="/icons/chem.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <h3 style={{color:"#198754"}}>Якість</h3>
                <p style={{color:"#343536"}}>Рідкий CO2 високої якості ≥ 99,998 %</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
