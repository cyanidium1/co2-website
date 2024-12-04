import React from 'react';
import MultipageNavbar from '@/components/Layout/MultipageNavbar';
import MainBanner from '../../components/HomePages/Repair/MainBanner';
import AboutUs from '../../components/HomePages/Repair/AboutUs';
import Services from '../../components/HomePages/Repair/Services';
import TeamSlider from '../../components/Common/TeamSlider';
import RecentProjects from '../../components/HomePages/Repair/RecentProjects';
import Testimonials from '../../components/HomePages/Repair/Testimonials';
import Pricing from '../../components/Common/Pricing';
import Partners from '../../components/HomePages/Repair/Partners';
import OurBlog from '../../components/HomePages/Repair/OurBlog';
import Footer from '../../components/HomePages/Repair/Footer';
import FaqContentStyle2 from '@/components/Common/FaqContentStyle2';

 
 
export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <MainBanner />

      {/* <TopServices /> */}

      <AboutUs />

      <Services />

      <FaqContentStyle2/>

      <TeamSlider />

      <RecentProjects />

      <Testimonials />

      <Pricing />

      <Partners />

      <OurBlog />

      <Footer />
 
    </>
  )
}
