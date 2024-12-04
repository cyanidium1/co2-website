"use client";
  
import React from "react";

const FunFacts: React.FC = () => {
  return (
    <>
      <div className="funfacts-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="funFact">
                <i className="icofont-users-alt-5"></i>
                <h3>
                  <span className="count">500</span>K
                </h3>
                <p>Lovely Users</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funFact">
                <i className="icofont-download"></i>
                <h3>
                  <span className="count">450</span>K
                </h3>
                <p>Download</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funFact">
                <i className="icofont-search-document"></i>
                <h3>
                  <span className="count">1000</span>K
                </h3>
                <p>Resource</p>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-3 col-6">
              <div className="funFact">
                <i className="icofont-star-shape"></i>
                <h3>
                  <span className="count">5.00</span>
                </h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
