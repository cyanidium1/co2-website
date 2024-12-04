import React from "react";
import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import Footer from "@/components/Layout/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import PageTitle from "@/components/Common/PageTitle";
import TeamMember from "@/components/Team/TeamMember";

export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <PageTitle
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamMember />

      <SubscribeForm />

      <Footer />
    </>
  );
}
