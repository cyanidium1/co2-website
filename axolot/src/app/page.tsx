import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import MainBanner from "@/components/HomePages/MainBanner";
import Features from "@/components/Common/Features";
import AboutUs from "@/components/Common/AboutUs";
import ServicesSlider from "@/components/Common/ServicesSlider";
import ServicesTab from "@/components/Common/ServicesTab";
import FunFacts from "@/components/Common/FunFacts";
import JoinClients from "@/components/Common/JoinClients";
import HowItWorks from "@/components/Common/HowItWorks";
import TeamSlider from "@/components/Common/TeamSlider";
import Testimonials from "@/components/Common/Testimonials";
import FaqContent from "@/components/Common/FaqContent";
import Pricing from "@/components/Common/Pricing";
import Partners from "@/components/Common/Partners";
import SubscribeForm from "@/components/Common/SubscribeForm";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <>
      <MultipageNavbar />

      <MainBanner />

      <Features />

      <AboutUs />

      <ServicesSlider />

      <ServicesTab />

      <FunFacts />

      <JoinClients />

      <HowItWorks />

      <TeamSlider />

      <Testimonials />

      <FaqContent />

      <Pricing />

      <Partners />

      <SubscribeForm />

      <Footer />
    </>
  );
}
