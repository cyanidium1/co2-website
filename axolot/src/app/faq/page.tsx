import React from "react";
import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import Footer from "@/components/Layout/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import PageTitle from "@/components/Common/PageTitle";
import FaqContent from "@/components/Faq/FaqContent";

export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <PageTitle
        pageTitle="Faq"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
      />

      <FaqContent />

      <SubscribeForm />

      <Footer />
    </>
  );
}
