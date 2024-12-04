"use client";
  
import React from "react";
import Link from "next/link";

interface PageTitleProps {
  pageTitle: string;
  homePageUrl: string;
  homePageText: string;
  activePageText: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <>
      <div className="page-title">
        <div className="pattern-2"></div>
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h3>{pageTitle}</h3>
                <ul>
                  <li>
                    <Link href={homePageUrl}>{homePageText}</Link>
                  </li>
                  <li>
                    <i className="icofont-thin-right"></i>
                  </li>
                  <li>{activePageText}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
