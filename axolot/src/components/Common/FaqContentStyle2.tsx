"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Image from "next/image";

const FaqContentStyle2: React.FC = () => {
  return (
    <>
      <section id="faq" className="faq-area bg-gray ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>Опис процесу</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        <strong>1. Подавання сирого газу:</strong> Сирий газ,
                        вільний від піни, подається в установку. Газ
                        буферизується в балоні (1).
                      </p>
                      <p>
                        <strong>
                          2. Очищення газу від водорозчинних забруднювачів:
                        </strong>{" "}
                        Газ очищається від водорозчинних домішок, таких як
                        етанол, у газовому пральнику (2).
                      </p>
                      <p>
                        <strong>3. Компресія газу:</strong> Газ проходить через
                        двоступеневий безмасляний компресор CO2 (3), що підвищує
                        тиск до 18 бар (261 psig). Під час цього процесу
                        видаляється конденсат.
                      </p>
                      <p>
                        <strong>4. Очищення від домішок i води:</strong>{" "}
                        Залишкові домішки та вода видаляються в двоступеневому
                        фільтрі з активованим вугіллям i сушильному пристрої
                        (4). Регенація фільтра автоматично виконується за
                        допомогою нагрівальних елементів i сухого газу CO2.
                      </p>
                      <p>
                        <strong>5. Ліквідація CO2:</strong> Ліквідація CO2
                        відбувається в конденсаторі, охолодженому холодоагентом
                        (6). Процес включає конденсатор холодоагенту (7) та
                        компресор холодоагенту (8).
                      </p>
                      <p>
                        <strong>6. Видалення O2:</strong> O2 видаляється в
                        стриппері (5).
                      </p>
                      <p>
                        <strong>7. Зберігання очищеного CO2:</strong> Очищена
                        рідка CO2 передається в резервуар для зберігання на
                        майданчику.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Доступні варіанти
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="options-chips">
                        <span className="chip">Газові насоси</span>
                        <span className="chip">Аерозольні пральники</span>
                        <span className="chip">
                          LiquiVap - система раннього відновлення та економії
                          енергії
                        </span>
                        <span className="chip">
                          Резервуар для зберігання рідкого CO2
                        </span>
                        <span className="chip">
                          Випаровувач, що нагрівається навколишнім повітрям або
                          гліколем
                        </span>
                        <span className="chip">Одиниця наповнення балонів</span>
                        <span className="chip">
                          Насос для автотранспортних цистерн
                        </span>
                        <span className="chip">
                          Обладнання для контролю якості
                        </span>
                        <span className="chip">
                          Послуги з монтажу та пусконалагодження
                        </span>
                        <span className="chip">Оригінальні запчастини</span>
                        <span className="chip">
                          Послуги післяпродажного обслуговування
                        </span>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="faq-img"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image
                  src="/images/faq.jpg"
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
