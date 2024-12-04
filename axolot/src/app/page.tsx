import React from 'react';
import MultipageNavbar from '@/components/Layout/MultipageNavbar';
import MainBanner from '../components/HomePages/Repair/MainBanner';
import AboutUs from '../components/HomePages/Repair/AboutUs';
import Services from '../components/HomePages/Repair/Services';
import Footer from '../components/HomePages/Repair/Footer';
import FaqContentStyle2 from '@/components/Common/FaqContentStyle2';
import AboutProduct from '@/components/HomePages/Repair/AboutProduct';
import ContactInfo from '@/components/Contact/ContactInfo';
import FormComponent from '@/components/HomePages/Repair/FormComponent';

 
 
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
