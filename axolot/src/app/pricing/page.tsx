import React from "react";
import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import Footer from "@/components/Layout/Footer";
import PageTitle from "@/components/Common/PageTitle";
import PricingTable from "@/components/Pricing/PricingTable";

export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <PageTitle
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />

      <PricingTable />

      <Footer />
    </>
  );
}
