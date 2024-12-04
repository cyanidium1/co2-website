"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const JoinClients: React.FC = () => {
  return (
    <>
      <div className="join-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div
                className="join-img text-center"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Image src="/img/3.png" alt="img" width={500} height={400} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="join-content">
                <h3>Overall 400k+ Our Clients Please Get Start Now</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
                
                <Link href="#" className="btn btn-primary">
                  Join Now
                </Link>
                <Link href="#" className="btn btn-secondary">
                  For Free trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinClients;
