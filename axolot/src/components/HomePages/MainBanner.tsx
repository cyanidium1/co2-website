"use client";

import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const MainBanner: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div id="home" className="main-banner bg-gray">
        <div className="pattern-2"></div>
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>

        <div className="container">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Make your business more profitable
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut.
                </p>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <Link href="/contact" className="btn btn-primary">
                    Get Started
                  </Link>

                  <div
                    className="btn btn-secondary"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="icofont-ui-play"></i> Watch Our Video
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="banner-img"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/img/main-banner.png"
                  alt="img"
                  width={560}
                  height={454}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pattern"></div>
      </div>
    </>
  );
};

export default MainBanner;
