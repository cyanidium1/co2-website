"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const MainBanner: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />
          <div
            className="repair-main-banner"
            style={{ backgroundImage: `url(/images/hero.jpg)` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="repair-banner-content">
                    <h2>Установка рекуперації CO2 Haffmans (CRU)</h2>
                    <Link href="/contact" className="btn btn-primary">
                     Звʼяжіться з нами
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="banner-video text-center">
                    <div onClick={() => setToggler(!toggler)}>
                      <i className="icofont-ui-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default MainBanner;