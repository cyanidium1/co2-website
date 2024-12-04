"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopServices: React.FC = () => {
  return (
    <>
      <section className="repair-boxes-area">
        <div className="container">
          <div className="row m-0 justify-content-center">
            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-repair-box">
                <i className="icofont-laptop-alt"></i>
                <h3>Laptop Repair</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <Link href="#">Read More</Link>

                <div className="img-box">
                  <Image
                    src="/img/shape1.png"
                    alt="image"
                    width={323}
                    height={304}
                  />
                  <Image
                    src="/img/shape2.png"
                    alt="image"
                    width={339}
                    height={296}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-repair-box active">
                <i className="icofont-imac"></i>
                <h3>PC Mac Computers</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <Link href="#">Read More</Link>

                <div className="img-box">
                  <Image
                    src="/img/shape1.png"
                    alt="image"
                    width={323}
                    height={304}
                  />
                  <Image
                    src="/img/shape2.png"
                    alt="image"
                    width={339}
                    height={296}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 p-0">
              <div className="single-repair-box">
                <i className="icofont-smart-phone"></i>
                <h3>Smartphone Repair</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
                <Link href="#">Read More</Link>

                <div className="img-box">
                  <Image
                    src="/img/shape1.png"
                    alt="image"
                    width={323}
                    height={304}
                  />
                  <Image
                    src="/img/shape2.png"
                    alt="image"
                    width={339}
                    height={296}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopServices;
