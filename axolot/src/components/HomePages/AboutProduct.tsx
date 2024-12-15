"use client";

import React from "react";
import Image from "next/image";

const AboutProduct: React.FC = () => {
  return (
    <>
      <section id="related" className="about-area ptb-100">
        <div className="container">
          <div className="section-title" data-aos="fade-right"
                data-aos-duration="800">
            <h3>Опції</h3>
          </div>

          <div className="style-border">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-content" data-aos="fade-right"
                data-aos-duration="800">
                  <h3 >СО2Lab пропонує комплексні рішення для роботи з діоксидом вуглецю:</h3>
                  <ul className="pull-left" data-aos="fade-up"
                data-aos-duration="800">
                    <li>
                      <i className="icofont-ui-check"></i>Ємності для зберігання СО2
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i>Аналітичні системи
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i>Газодувки та розробка трубопроводів
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i>Шеф-монтаж обладнання
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i>Будівельні роботи
                    </li>
                    <li>
                      <i className="icofont-ui-check"></i>Генпроектування
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
