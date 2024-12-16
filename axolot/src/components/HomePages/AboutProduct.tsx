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
                <div className="about-content" data-aos="fade-right"
                data-aos-duration="800">
                  <h3 style={{textAlign:"center"}}>Інженерне бюро СО2Lab візьме вашу задачу на EPC контракт:</h3>
                <ul style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                   width:"100%"
                  }} className="pull-left" data-aos="fade-up"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutProduct;
