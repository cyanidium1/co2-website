import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="error-content">
            <div className="mb-5">
              <Image
                src="/img/error.png"
                alt="error"
                width={500}
                height={198}
              />
            </div>

            <h3 className="mb-3">Error 404 : Page Not Found</h3>

            <p className="mb-4">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>

            <Link href="/" className="btn btn-primary">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
