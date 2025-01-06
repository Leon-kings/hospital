import React from 'react'
React;
import Blog from "../../compounds/blog/BlogIcons";
import Count from "../../compounds/count/Count";
import Slider from "../../compounds/slidebar/SliderHead";
import Contact from '../contact/Address';
import About1 from '../about/About';
import Head from '../../compounds/heading/Head';
import Carousel from '../../compounds/multislider/MultiSlider';
import Service from '../services/Services';
import Pricing from '../../compounds/pricing/Pricing';
import News from '../../compounds/news/MedicalNews';
import Appoint from '../../compounds/appointment/Appointment';
export default function Home() {
  return (
    <>
      <div className="container items-center p-4 bg-white w-full xl:w-full md:w-full lg:w-full sm:w-full">
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full">
          <Slider/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full">
          <Blog />
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full">
          <Count />
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full ">
          <Contact/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full">
          <About1/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full ">
          <Head/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full">
          <Carousel/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full">
          <Service/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full">
          <Pricing/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full ">
          <News/>
        </div>
        <div className="contain w-full xl:w-full md:w-full lg:w-full sm:w-full ">
          <Appoint/>
        </div>
       
      </div>
    </>
  );
}
