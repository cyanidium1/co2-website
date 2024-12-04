"use client";
  
import React from "react";
import GoogleMap from "./GoogleMap";
import ContactInfo from "./ContactInfo";

const ContactForm: React.FC = () => {
  return (
    <>
      <section className="contact-area bg-gray ptb-100">
        <div className="container">
          {/* ContactInfo */}
          <ContactInfo />

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <GoogleMap />
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="contact-text">
                <h3>Get in Touch</h3>
                <p>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra
                  dictum.
                </p>
                <p>
                  Sed blandit tempus purus, sed sodales leo rutrum vel. Nam
                  vulputate ipsum ac est congue, eget commodo magna lobortis.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        placeholder="Name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols={30}
                        rows={4}
                        required
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
