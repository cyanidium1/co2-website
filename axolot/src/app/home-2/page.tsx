import React from 'react';
import MultipageNavbar from '@/components/Layout/MultipageNavbar';
import MainBanner2 from '@/components/HomePages/MainBanner2';
import Features from '@/components/Common/Features';
import AboutUs from '@/components/Common/AboutUs';
import ServicesCard from '@/components/Common/ServicesCard';
import ServicesTab from '@/components/Common/ServicesTab';
import FunFactsStyle2 from '@/components/Common/FunFactsStyle2';
import JoinClients2 from '@/components/Common/JoinClients2';
import HowItWorks from '@/components/Common/HowItWorks';
import TeamSliderStyle2 from '@/components/Common/TeamSliderStyle2';
import TestimonialsSlider from '@/components/Common/TestimonialsSlider';
import FaqContent from '@/components/Common/FaqContent';
import PricingStyle2 from '@/components/Common/PricingStyle2';
import Partners from '@/components/Common/Partners';
import SubscribeForm from '@/components/Common/SubscribeForm';
import Footer from '@/components/Layout/Footer';
 
export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <MainBanner2 /> 

      <AboutUs />
 
      <Features />
      
      <ServicesCard />

      <JoinClients2 />
 
      <ServicesTab />

      <FunFactsStyle2 />
 
      <HowItWorks />

      <TeamSliderStyle2 />

      <TestimonialsSlider />

      <FaqContent />

      <PricingStyle2 />

      <Partners />

      <SubscribeForm />

      <Footer />
    </>
  )
}
