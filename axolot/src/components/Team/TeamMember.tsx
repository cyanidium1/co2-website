"use client";
  
import React from "react";
import Image from "next/image";

const TeamMember: React.FC = () => {
  return (
    <>
      <div className="team-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/team-1.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">John Smith</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/team-2.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">John Doe</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/team-3.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">David Warner</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/team-4.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Steven Smith</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/team-5.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">David Walker</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-team">
                <div className="pic">
                  <Image
                    src="/img/team-3.jpg"
                    alt="team"
                    width={450}
                    height={450}
                  />

                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.com/" target="_blank">
                        <i className="icofont-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">David Warner</h3>
                  <span className="post">Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
