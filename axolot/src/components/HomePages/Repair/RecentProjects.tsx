"use client";
  
import React from "react";
import Image from "next/image";

const RecentProjects: React.FC = () => {
  return (
    <>
      <section id="gallery" className="gallery-area ptb-100 bg-fbf9f8">
        <div className="container">
          <div className="section-title">
            <span>Recent Projects</span>
            <h3>Our work photo gallery</h3>
            <p>
              We enjoy adapting our strategies to offer every client the best
              solutions that are at the forefront of the industry.
            </p>
          </div>

          <div className="shorting">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery-item">
                  <a href="#" className="popup-btn">
                    <Image
                      src="/img/gallery-one.jpg"
                      alt="image"
                      width={360}
                      height={360}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery-item">
                  <a href="#" className="popup-btn">
                    <Image
                      src="/img/gallery-two.jpg"
                      alt="image"
                      width={360}
                      height={360}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery-item">
                  <a href="#" className="popup-btn">
                    <Image
                      src="/img/gallery-three.jpg"
                      alt="image"
                      width={360}
                      height={360}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery-item">
                  <a href="#" className="popup-btn">
                    <Image
                      src="/img/gallery-four.jpg"
                      alt="image"
                      width={360}
                      height={360}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery-item">
                  <a href="#" className="popup-btn">
                    <Image
                      src="/img/gallery-five.jpg"
                      alt="image"
                      width={360}
                      height={360}
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-gallery-item">
                  <a href="#" className="popup-btn">
                    <Image
                      src="/img/gallery-six.jpg"
                      alt="image"
                      width={360}
                      height={360}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentProjects;
