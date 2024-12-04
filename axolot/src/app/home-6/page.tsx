import React from 'react';
import MultipageNavbar from '@/components/Layout/MultipageNavbar';
import MainBanner6 from '@/components/HomePages/MainBanner6';
import FeaturesSlider from '@/components/Common/FeaturesSlider';
import AboutUs from '@/components/Common/AboutUs';
import ServicesSlider from '@/components/Common/ServicesSlider';
import ServicesTab from '@/components/Common/ServicesTab';
import FunFactsStyle2 from '@/components/Common/FunFactsStyle2';
import JoinClients from '@/components/Common/JoinClients';
import HowItWorks from '@/components/Common/HowItWorks';
import TeamSliderStyle3 from '@/components/Common/TeamSliderStyle3';
import TestimonialsSlider2 from '@/components/Common/TestimonialsSlider2';
import FaqContentStyle2 from '@/components/Common/FaqContentStyle2';
import PricingStyle2 from '@/components/Common/PricingStyle2';
import Partners from '@/components/Common/Partners';
import SubscribeForm from '@/components/Common/SubscribeForm';
import Footer from '@/components/Layout/Footer';
 
export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <MainBanner6 /> 

      <FeaturesSlider />

      <HowItWorks />
 
      <AboutUs />
  
      <ServicesSlider />

      <JoinClients />

      <FunFactsStyle2 />
 
      <ServicesTab />

      <TeamSliderStyle3 />

      <TestimonialsSlider2 />

      <FaqContentStyle2 />

      <Partners />

      <PricingStyle2 />

      <SubscribeForm />

      <Footer />
    </>
  )
}
