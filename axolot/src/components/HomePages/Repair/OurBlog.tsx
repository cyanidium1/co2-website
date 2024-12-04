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
            <h3>Останні новини</h3>
          </div>

          <div className="single-repair-blog-post">
            <Link href="#" style={{
              display: "flex", gap:40}}>
                <Image
                  src="/images/news.png"
                  alt="image"
                  width={260}
                  height={180}
                />
                <div className="blog-content">
                <h3 style={
                  {
                    fontSize: 32,
                    marginBottom:40
                  }
                  }>
                   Ефективне зниження вмісту кисню у воді
                  </h3>

                <Link href="#" className="read-more-btn" style={{
                  backgroundColor: "#f06334",
                  color: "white",
                  padding: "12px 32px",
                    
                  }}>
                    Read More
                  </Link>
                </div>
              </Link>
            </div>
          </div>
      </section>
    </>
  );
};

export default OurBlog;
