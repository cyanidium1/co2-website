
import React from "react";
import Image from "next/image";

const FaqContentStyle2: React.FC = () => {
  return (
    <>
      <section id="description" className="faq-area ptb-100" style={{backgroundColor:"rgba(25, 135, 84, 0.1)"}}>
        <div className="container">
          <div className="row align-items-center">
                 <div
                className="section-title"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h3>Опис процесу</h3>
              </div>
                    
            <div className="col-lg-6 col-md-12">
              <div className="faq">
                      <p>
                        <strong>1. Газгольдер: </strong>{" "}відхідний газ, подається в установку
                      </p>
                      <p>
                        <strong>
                          2. Колона очистки сирого газу:
                        </strong>{" "}
                        газ очищається від водорозчинних домішок, таких як етанол, у газовому промивнику
                      </p>
                      <p>
                        <strong>3. Компресор:</strong> підвищує тиск газу до 18 бар, при цьому видаляються конденсати
                      </p>
                      <p>
                        <strong>4. Фільтр i осушувач з активованим вугіллям:</strong>{" "}
                        залишкові домішки та вода видаляються в двоступеневому фільтрі з активованим вугіллям в осушувальній установці. Регенерація фільтра автоматично виконується за допомогою нагрівальних елементів i сухого газу CO2
                      </p>
                      <p>
                        <strong>5. Ребойлер:</strong> залишки О2 видаляються в ребойлері
                      </p>
                      <p>
                        <strong>6. Конденсатор CО2 з холодоагентом:</strong> зрідження CO2 відбувається в конденсаторі, охолодженому холодоагентом. Процес включає конденсатор CO2 (6) та компресор холодоагенту (7)
                      </p>
                      <p>
                        <strong>7. Компресор холодоагенту</strong> 
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="faq-img"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image
                  src="/images/faq.png"
                  alt="faq"
                  width={605}
                  height={525}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqContentStyle2;
