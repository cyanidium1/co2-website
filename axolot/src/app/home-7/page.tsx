import React from 'react';
import MultipageNavbar from '@/components/Layout/MultipageNavbar';
import MainBanner from '../../components/HomePages/Repair/MainBanner';
import TopServices from '../../components/HomePages/Repair/TopServices';
import AboutUs from '../../components/HomePages/Repair/AboutUs';
import Services from '../../components/HomePages/Repair/Services';
import TeamSlider from '../../components/Common/TeamSlider';
import RecentProjects from '../../components/HomePages/Repair/RecentProjects';
import Testimonials from '../../components/HomePages/Repair/Testimonials';
import Pricing from '../../components/Common/Pricing';
import Partners from '../../components/HomePages/Repair/Partners';
import OurBlog from '../../components/HomePages/Repair/OurBlog';
import Footer from '../../components/HomePages/Repair/Footer';
 
 
export default function Page() {
  return (
    <>
      <MultipageNavbar />

      <MainBanner />

      {/* <TopServices /> */}

      <AboutUs />

      <Services />

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
