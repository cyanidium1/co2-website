"use client";

import React from "react";

const AboutUs: React.FC = () => {
  return (
    <>
      <section id="about" className="repair-about-area ptb-100">
              <div
                className="section-title"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h3>Рекуперація СО2</h3>
              </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="repair-about-content"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                <div className="section-title">
                  <h3>Установки рекуперації CO2 від СО2Lab</h3>
                  <p>
                    це надійне рішення для рекуперації CO2, яке підходить для
                    потреб різного типу харчових та хімічних виробництв, в
                    діапазоні продуктивності від 500&nbsp;кг&nbsp;СО2/год до
                    5&nbsp;000&nbsp;кг&nbsp;СО2/год
                  </p>
                </div>
                <div>
                  <p style={{fontWeight:700,color:"#198754"}}>
                    Джерела утворення викидів СО2 на яких використовуються
                    Установки рекуперації CO2 від СО2Lab
                  </p>
                  <br/>
                  <ul>
                    <li>
                      <i className="icofont-badge"></i> Біоетанольне виробництво
                    </li>
                    <li>
                      <i className="icofont-badge"></i> Пивоварні
                    </li>
                    <li>
                      <i className="icofont-badge"></i> Біогазове виробництво
                    </li>
                    <li>
                      <i className="icofont-badge"></i> Когенераційні установки
                    </li>
                    <li>
                      <i className="icofont-badge"></i> Хімічні виробництва
                      (аміачні заводи)
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-about-image">
                <h3 style={{ color: "#198754" }}>Забезпечте себе CO2</h3>
                <p data-aos="fade-left" data-aos-duration="600">
              Підвищить ефективність вашого виробництва разом із установками рекуперації CO2 від СО2Lab. Ми пропонуємо індивідуальні рішення, які враховують специфічні вимоги вашого підприємства. Наші фахівці готові розробити, виготовити та встановити обладнання, адаптоване до будь-яких умов, навіть якщо доступний простір обмежений.
                </p>
                <br />
                <p data-aos="fade-right" data-aos-duration="600" style={{fontWeight:700,color:"#198754"}}>
             Наші установки дозволяють:
                </p>
                <br/>
                 <ul data-aos="fade-right" data-aos-duration="600" style={{display:"flex",flexDirection:"column", gap:16, alignItems:"flex-start"}}>
                  <li style={{fontWeight:700}}>Уловлювати відхідний СО2</li>
                  <li style={{fontWeight:700}}>Очищати, скраплювати та зберігати його</li>
            <li style={{fontWeight:700}}>Відвантажувати зріджений CO2 відповідно до ваших потреб</li>
          </ul>

              </div>
            </div>
          </div>
    
          <p data-aos="fade-right" data-aos-duration="600">
           На виході ви отримуєте рідкий CO2, чистота якого відповідає стандартам ДСТУ 4817:2007 для харчового застосування, а за потреби — європейському стандарту ISBT.
          </p>
           <p data-aos="fade-right" data-aos-duration="600" style={{fontWeight:700,color: "#198754"}}>
          Самостійна рекуперація СО2 — це не лише економія ресурсів, але й відповідальний крок до сталого майбутнього. 
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
