"use client";

import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const MainBanner6: React.FC = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div id="home" className="main-banner bg-gray">
        <div className="creative-bg-two"></div>
        <div className="pattern"></div>
        <div className="pattern-2"></div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="main-banner-content">
                <h1>An attention grabbing headline with strong idea</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut.
                </p>

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

            <div className="col-lg-5 col-md-6 offset-lg-1 offset-md-0">
              <div className="hero-form">
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
                    Call to Action
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
      </div>
    </>
  );
};

export default MainBanner6;
