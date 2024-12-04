import React from 'react';
import OnePageNavbar from '@/components/Layout/OnePageNavbar';
import MainBanner from '@/components/HomePages/OnePageDemo/MainBanner';
import Features from '@/components/HomePages/OnePageDemo/Features';
import AboutUs from '@/components/HomePages/OnePageDemo/AboutUs';
import ServicesSlider from '@/components/HomePages/OnePageDemo/ServicesSlider';
import ServicesTab from '@/components/HomePages/OnePageDemo/ServicesTab';
import FunFacts from '@/components/HomePages/OnePageDemo/FunFacts';
import JoinClients from '@/components/HomePages/OnePageDemo/JoinClients';
import HowItWorks from '@/components/HomePages/OnePageDemo/HowItWorks';
import TeamSlider from '@/components/HomePages/OnePageDemo/TeamSlider';
import Testimonials from '@/components/HomePages/OnePageDemo/Testimonials';
import FaqContent from '@/components/HomePages/OnePageDemo/FaqContent';
import Pricing from '@/components/HomePages/OnePageDemo/Pricing';
import Partners from '@/components/HomePages/OnePageDemo/Partners';
import SubscribeForm from '@/components/HomePages/OnePageDemo/SubscribeForm';
import Footer from '@/components/Layout/Footer';
 
export default function Page() {
  return (
    <>
      <OnePageNavbar />

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
  )
}
