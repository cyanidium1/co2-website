import React from "react";
import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import Footer from "@/components/Layout/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import PageTitle from "@/components/Common/PageTitle";
import ServicesCard from "@/components/Services/ServicesCard";

export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <PageTitle
        pageTitle="Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
      />

      <ServicesCard />

      <SubscribeForm />

      <Footer />
    </>
  );
}
