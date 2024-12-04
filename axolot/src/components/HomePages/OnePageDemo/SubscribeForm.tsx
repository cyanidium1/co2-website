"use client";
  
import React from "react";

const SubscribeForm: React.FC = () => {
  return (
    <>
      <div className="subscribe-area ptb-100">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
        
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="newsletter">
                <h4>
                  Subscribe for the latest <span>Axolot</span> Updates
                </h4>
                <form>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    name="EMAIL"
                    required
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="pattern"></div>
        <div className="pattern-2"></div>
      </div>
    </>
  );
};

export default SubscribeForm;
