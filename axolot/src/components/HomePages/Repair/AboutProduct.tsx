"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutProduct: React.FC = () => {
  return (
    <>
      <section id="about-product" className="about-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h3>Супутні продукти</h3>
          </div>

          <div className="style-border">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <h3>Haffmans CO2mpactBrew</h3>
                  <p>
                    CO2mpactBrew — це установка для відновлення CO2, спеціально
                    розроблена для невеликих крафтових пивоварень, що забезпечує
                    безперервне i незалежне постачання CO2 харчового класу.{" "}
                    <br />
                    Відновлення власного CO2 знижує викиди CO2 та VOC, що робить
                    операцію більш сталим процесом.
                    <br />
                    Підтримка та обслуговування CO2mpactBrew триває після
                    введення в експлуатацію завдяки управлінню життєвим циклом i
                    технічній підтримці.
                  </p>
                  <ul className="pull-left">
                    <li>
                      <i className="icofont-ui-check"></i> Незалежність у CO2
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Висока якість рідкого
                      CO2 ≥ 99,998 % обʼємних часток, O2 ≤ 5 ppm обʼємних часток
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Висока ефективність
                      відновлення навіть при низькій чистоті CO2 на вході ≥ 95%
                      обʼємних часток
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Надійний дизайн для
                      безперебійної роботи 24/7, час безвідмовної роботи ≥ 95%
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="icofont-ui-check"></i> Компактний розмір
                      (40-футовий скід)
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Готова до підключення
                      система plug-and-play
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Без використання
                      хладагентів
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i> Легке оновлення
                      потужності при збереженні того ж розміру
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div
                  className="about-img right-img"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <Image
                    src="/images/related.jpg"
                    alt="Haffmans
CO2mpactBrew "
                    width={605}
                    height={525}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProduct;
