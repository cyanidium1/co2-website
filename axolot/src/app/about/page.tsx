import React from "react";
import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import Footer from "@/components/Layout/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import PageTitle from "@/components/Common/PageTitle";
import AboutContent from "@/components/About/AboutContent";

export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <PageTitle
        pageTitle="About"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About"
      />

      <AboutContent />

      <SubscribeForm />

      <Footer />
    </>
  );
}
