import React from 'react';
import MultipageNavbar from '@/components/Layout/MultipageNavbar';
import MainBanner from '../components/HomePages/MainBanner';
import AboutUs from '../components/HomePages/AboutUs';
import Services from '../components/HomePages/Services';
import Footer from '../components/HomePages/Footer';
import FaqContentStyle2 from '@/components/HomePages/FaqContentStyle2';
import AboutProduct from '@/components/HomePages/AboutProduct';
import FormComponent from '@/components/HomePages/FormComponent';

 
 
export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <MainBanner />

      <AboutUs />

      <Services />

      <FaqContentStyle2 />
      
      <AboutProduct />

      <FormComponent/>

      <Footer />
 
    </>
  )
}
