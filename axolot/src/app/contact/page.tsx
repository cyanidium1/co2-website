import React from "react";
import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Layout/Footer";
import PageTitle from "@/components/Common/PageTitle";

export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <PageTitle
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
      />

      <ContactForm />

      <Footer />
    </>
  );
}
