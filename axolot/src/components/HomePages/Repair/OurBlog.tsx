"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurBlog: React.FC = () => {
  return (
    <>
      <section id="blog" className="repair-blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our blog</span>
            <h3>Recent Axolot news</h3>
            <p>
              We enjoy adapting our strategies to offer every client the best
              solutions that are at the forefront of the industry.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-repair-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <Image
                      src="/img/blog-one.jpg"
                      alt="image"
                      width={360}
                      height={280}
                    />
                  </Link>
                  <div className="tags">
                    <Link href="#">Technology</Link>
                  </div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      Where and How to watch live stream today
                    </Link>
                  </h3>
                  <ul>
                    <li>July 10, 2024</li>
                    <li>
                      by: <Link href="#">admin</Link>
                    </li>
                    <li>
                      <Link href="#" className="read-more-btn">
                        Read More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-repair-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <Image
                      src="/img/blog-two.jpg"
                      alt="image"
                      width={360}
                      height={280}
                    />
                  </Link>
                  <div className="tags">
                    <Link href="#">Technology</Link>
                  </div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      TikTok illegally collecting data, sharing with China
                    </Link>
                  </h3>
                  <ul>
                    <li>July 10, 2024</li>
                    <li>
                      by: <Link href="#">admin</Link>
                    </li>
                    <li>
                      <Link href="#" className="read-more-btn">
                        Read More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-repair-blog-post">
                <div className="blog-image">
                  <Link href="#">
                    <Image
                      src="/img/blog-three.jpg"
                      alt="image"
                      width={360}
                      height={280}
                    />
                  </Link>
                  <div className="tags">
                    <Link href="#">Technology</Link>
                  </div>
                </div>
                <div className="blog-content">
                  <h3>
                    <Link href="#">
                      The five devices you need to work anytime and anywhere
                    </Link>
                  </h3>
                  <ul>
                    <li>July 10, 2024</li>
                    <li>
                      by: <Link href="#">admin</Link>
                    </li>
                    <li>
                      <Link href="#" className="read-more-btn">
                        Read More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBlog;
