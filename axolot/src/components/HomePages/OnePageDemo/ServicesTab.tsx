"use client";
  
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

const ServicesTab: React.FC = () => {
  return (
    <>
      <section className="vision-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="react-tab">
                <Tabs>
                  <TabList>
                    <Tab>
                      <i className="icofont-laptop"></i>
                      <br />
                      User Experience
                    </Tab>
                    <Tab>
                      <i className="icofont-ruler-pencil-alt-2"></i>
                      <br />
                      Product Design
                    </Tab>
                    <Tab>
                      <i className="icofont-marker-alt-1"></i>
                      <br />
                      Digital Marketing
                    </Tab>
                    <Tab>
                      <i className="icofont-light-bulb"></i>
                      <br />
                      Branding
                    </Tab>
                    <Tab>
                      <i className="icofont-laptop-alt"></i>
                      <br />
                      Development
                    </Tab>
                    <Tab>
                      <i className="icofont-infant-nipple"></i>
                      <br />
                      Marketing
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>User Experience</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/1.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/2.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mb-0">
                          <h3>Product Design</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Digital Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/3.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/1.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mb-0">
                          <h3>Branding</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Development</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/2.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <Image
                            src="/img/4.png"
                            alt="img"
                            width={500}
                            height={400}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content">
                          <h3>Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTab;
