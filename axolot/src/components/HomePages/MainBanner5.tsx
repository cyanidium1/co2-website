"use client";

import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const MainBanner5: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div id="home" className="main-banner bg-gray">
        <div className="creative-bg"></div>
        <div className="pattern"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  A clear, concise headline about your product or service
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
                  <Link href="/about" className="btn btn-primary">
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

            <div className="col-lg-5 col-md-6 offset-lg-1 offset-md-0">
              <div
                className="banner-form"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <form>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Your Email</label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Problem</label>
                    <select className="form-control">
                      <option>a website</option>
                      <option>a landing page</option>
                      <option>an iPhone app</option>
                      <option>an Android app</option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Schedule Assessment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pattern"></div>
      </div>
    </>
  );
};

export default MainBanner5;
