"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <>
      <section id="about" className="repair-about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="repair-about-content">
                <div className="section-title">
                  <span>Інформація про продукт</span>
                  <h3>Haffmans CO2 Recovery Unit (CRU)</h3>
                  <p>
                    це надійне та міцне рішення для відновлення CO2, яке підходить для широкого спектру потреб пивоварень, з продуктивністю від 300,000 до понад 5,000,000 гектолітрів на рік.
                  </p>
                </div>
                <ul>
                  <li>
                    <i className="icofont-badge"></i> Надійність
                  </li>
                  <li>
                    <i className="icofont-badge"></i> Сучасні технології
                  </li>
                  <li>
                    <i className="icofont-badge"></i> Індивідуальний підхід
                  </li>
                  <li>
                    <i className="icofont-badge"></i> Якість
                  </li>
                </ul>
                <h3 style={{color:"#f06334"}}>
                 Забезпечте себе CO2
                </h3>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-about-image">
            

                <p><span style={{ fontWeight: 700 }}>CO2 Recovery Unit (CRU)</span> — це надійне та міцне рішення для відновлення CO2, яке підходить для широкого спектру потреб пивоварень, з продуктивністю від 300,000 до понад 5,000,000 гектолітрів на рік. Це еталонна установка відновлення CO2 в глобальній пивоварній індустрії, де навіть 25-річні установки працюють стабільно.</p>
                <br/>
                <p>Програма CRU пропонує різноманітні варіанти, від економічних традиційних установок відновлення CO2 до установок із застосуванням найсучасніших технологій. Кожна установка CRU є індивідуальним шедевром: ми уважно слухаємо ваші потреби та проектуємо (вашу) CRU відповідно до ваших специфічних вимог. Обмежений простір для нової установки або модернізації? Не хвилюйтеся, наші інженери знайдуть рішення для найвужчих умов простору. </p>

        
              </div>
            </div>
          </div>
          <br/>
          <p>Чистота рідкого CO2, який отримується, перевищує загальні стандарти якості для харчових/напоїв/інгредієнтів, включаючи останню редакцію стандарту ISBT. Відновлення власного CO2 знижує вуглецевий слід вашого обʼєкта та зменшує викиди летючих органічних сполук у атмосферу. Обидва фактори сприяють більш сталому функціонуванню.</p>
          <br />
          <p>По всьому світу, індивідуальні рішення для клієнтів встановлюватимуть та вводитимуть в експлуатацію команда досвідчених i добре підготовлених інженерів з сервісного обслуговування. Але прагнення до вашої самодостатності в CO2 не зупиняється після введення в експлуатацію. Завдяки комплексному управлінню життєвим циклом, наша команда технічної підтримки та сервісу гарантує, що ваша CRU працює оптимально.</p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
